<script>
	import Logo from '../../Common/Logo/Logo.svelte';
</script>

<section class="vtmn-flex vtmn-flex-col vtmn-w-full">
	<div
		id="topLibelle"
		class="vtmn-flex vtmn-justify-center vtmn-space-x-1 vtmn-p-2 vtmn-bg-background-brand-primary vtmn-text-background-secondary vtmn-typo_text-3"
	>
		<span class="vtmx-truck-line" />
		<span class="vtmn-font-regular vtmn-font-bold vtmn-p-0">Gastos de envío</span>
		<span class="vtmn-font-regular">Gratis a partir de 30€ </span>
	</div>

	<div id="content" class="vtmn-flex vtmn-place-content-between">
		<div id="menu" class="vtmn-flex vtmn-space-x-1 vtmn-p-1 vtmn-text-xl">
			<button type="button" class="vtmn-border-0">
				<span class="vtmx-menu-line vtmn-m-2" />
			</button>
			<a href="https://www.decathlon.es" class="vtmn-flex">
				<Logo />
			</a>
		</div>

		<div id="icons" class="vtmn-flex vtmn-text-xl">
			<span class="vtmx-store-line vtmn-icon-size vtmn-m-2" />
			<span class="vtmx-user-line vtmn-m-2" />
			<span class="vtmx-shopping-cart-line vtmn-m-2" />
		</div>
	</div>

	<div id="searchBar" class="vtmn-flex vtmn-justify-center">
		<form
			class="vtmn-flex vtmn-w-full vtmn-mx-2 vtmn-border vtmn-rounded-100 vtmn-border-border-active"
		>
			<input
				type="text"
				name="search"
				placeholder="Busca tu producto por marca..."
				class="vtmn-p-2 vtmn-w-full vtmn-typo_text-3 vtmn-italic vtmn-border-0 focus:vtmn-outline-none"
			/>

			<button
				type="submit"
				aria-label="search"
				class="vtmn-flex vtmn-justify-center vtmn-items-center vtmn-border-0 vtmn-rounded-0 vtmn-bg-background-brand-primary vtmn-text-background-secondary"
			>
				<span class="vtmx-search-line vtmn-p-2 vtmn-mx-2" />
			</button>
		</form>
	</div>
</section>
