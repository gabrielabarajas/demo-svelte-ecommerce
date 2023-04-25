<script>
	export let product;
</script>

<a
	href={`https://www.decathlon.es/es/${product.url}`}
	class="vtmn-flex vtmn-flex-col vtmn-justify-center vtmn-items-center vtmn-p-4 vtmn-typo_text-3 hover:vtmn-no-underline"
>
	<img alt="" src={product.img} class="vtmn-w-1/2 vtmn-mb-4" />

	<div class="vtmn-flex vtmn-flex-col vtmn-items-center">
		<div class="vtmn-text-center vtmn-mb-1">
			{product.webLabel}
		</div>
		<div class="vtmn-mb-1 vtmn-price vtmn-price_size--xsmall vtmn-price_variant--accent">
			{product.price} €
		</div>
		{#if product.reviews.notation}
			<div class="vtmn-rating vtmn-rating_size--small">
				<span class="vtmx-star-fill" role="presentation" />
				<span class="vtmn-rating_comment--primary">
					{Math.floor(product.reviews.notation)}/5
				</span>
				<span class="vtmn-rating_comment--secondary">
					({product.reviews.count})
				</span>
			</div>
		{:else}
			<div>-</div>
		{/if}
	</div>
</a>
