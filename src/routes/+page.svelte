<script>
	import { searchInput, listProducts } from '../stores/index.js';
	import {
		getAvailableFilters,
		getProductsByName,
		getProductsByBrand
	} from '../services/filters.js';

	import Header from '../components/Layout/Header/Header.svelte';
	import Product from '../components/Scope/Product/Product.svelte';

	const { products } = $listProducts;

	let filterProducts = products;

	let currentFilters = [];

	const getMessage = () =>
		filterProducts.length > 0
			? 'Aquí tienes los resultados para tu búsqueda:'
			: 'No se han encontrado resultados para tu búsqueda:';

	$: validSearch = $searchInput.length > 3 ? $searchInput : '';

	$: if (validSearch && currentFilters) {
		filterProducts = getProductsByBrand(currentFilters, getProductsByName(validSearch, products));
	} else if (validSearch) {
		filterProducts = getProductsByName(validSearch, products);
	} else if (currentFilters) {
		filterProducts = getProductsByBrand(currentFilters, products);
	} else {
		filterProducts = products;
	}

	const allFilters = getAvailableFilters(products, filterProducts);
</script>

<svelte:head>
	<link rel="stylesheet" href="https://unpkg.com/@vtmn/css" />
	<link rel="stylesheet" href="https://unpkg.com/@vtmn/icons@1.2.1/dist/vitamix/font/vitamix.css" />
</svelte:head>

<Header />

<section>
	<div class="vtmn-p-4 vtmn-grow">
		<div class="vtmn-mb-4 vtmn-typo_text-3">
			<div class="vtmn-h-7 vtmn-mb-4">
				{#if validSearch}
					<div>{getMessage()}</div>
					<div class="vtmn-italic vtmn-underline">{validSearch}</div>
				{/if}
			</div>

			{#if allFilters}
				<div class="vtmn-divider vtmn-mb-4" />

				<div class="vtmn-typo_text-2 vtmn-mb-1 vtmn-underline">MARCAS</div>

				<div class="vtmn-flex vtmn-flex-wrap">
					<!-- Show filters available -->
					{#each allFilters as filter}
						<div class="vtmn-w-1/3">
							<label>
								<input type="checkbox" bind:group={currentFilters} value={filter.name} />
								{filter.name}
							</label>
						</div>
					{/each}
				</div>
			{/if}
		</div>

		{#if filterProducts.length}
			<div class="vtmn-divider vtmn-mb-4" />

			<div class="vtmn-typo_text-2 vtmn-mb-1 vtmn-underline">LISTADO DE PRODUCTOS</div>

			<div id="products" class="vtmn-grid vtmn-grid-cols-2 gt-tablet:vtmn-grid-cols-4">
				{#each filterProducts as product}
					<Product
						product={{
							url: product.url,
							img: product.models[0].image.url,
							webLabel: product.webLabel,
							price: product.models[0].price,
							reviews: {
								notation: product.reviews?.notation,
								count: product.reviews?.count
							}
						}}
					/>
				{/each}
			</div>
		{/if}
	</div>
</section>

<style>
	/* Feel free to add here your styles */
</style>
