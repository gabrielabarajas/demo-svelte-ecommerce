<script>
	// Haz que reciba un objeto "product" como propiedades
</script>

{#if product}
	<a
		href="#"
		class="vtmn-flex vtmn-flex-col vtmn-justify-center vtmn-items-center vtmn-p-4 vtmn-typo_text-3 hover:vtmn-no-underline"
	>
		<img alt="" src="#" class="vtmn-w-1/2 vtmn-mb-4" />

		<div class="vtmn-flex vtmn-flex-col vtmn-items-center">
			<div class="vtmn-text-center vtmn-mb-1">
				<!-- Nombre del producto -->
			</div>
			<div class="vtmn-mb-1 vtmn-price vtmn-price_size--xsmall vtmn-price_variant--accent">
				<!-- Precio del producto en € -->
			</div>
			<div class="vtmn-rating vtmn-rating_size--small">
				<span class="vtmx-star-fill" role="presentation" />
				<span class="vtmn-rating_comment--primary">
					<!-- Nota de review (4/5) -->
				</span>
				<span class="vtmn-rating_comment--secondary">
					<!-- Total de reviews -->
				</span>
			</div>
		</div>
	</a>
{/if}
