<script>
	import Header from '../components/Layout/Header/Header.svelte';
</script>

<svelte:head>
	<link rel="stylesheet" href="https://unpkg.com/@vtmn/css" />
	<link rel="stylesheet" href="https://unpkg.com/@vtmn/icons@1.2.1/dist/vitamix/font/vitamix.css" />
</svelte:head>

<Header />

<section>
	<div class="vtmn-p-4 vtmn-grow">
		<div class="vtmn-mb-4 vtmn-typo_text-3">
			<div id="search" class="vtmn-mb-4">
				<!-- Muestra un mensaje que enseñe la búsqueda actual y avise al usuario de si su búsqueda tiene o no resultados -->
			</div>

			<div class="vtmn-divider vtmn-mb-4" />

			<div id="filters">
				<!-- Renderiza los filtros y haz que sean reactivos con la opción que elija el usuario -->
			</div>
		</div>

		<div class="vtmn-divider vtmn-mb-4" />

		<div id="products">
			<div class="vtmn-typo_text-2 vtmn-mb-1 vtmn-underline">LISTADO DE PRODUCTOS</div>

			<div id="products" class="vtmn-grid vtmn-grid-cols-2 gt-tablet:vtmn-grid-cols-4">
				<!-- Renderiza el listado de productos usando el component <Product /> para pintar cada uno de ellos> -->
			</div>
		</div>
	</div>
</section>

<style>
	/* Feel free to add here your styles */
</style>
