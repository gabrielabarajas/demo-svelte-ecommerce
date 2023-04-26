##### [Castellano]

### 5. Añadir filtros por deporte

Vamos a complicarlo un poco, ahora nuestros productos deberan poder filtrarse no solo por búsqueda si no además por deporte.

1. En nuestra app principal (`+page.svelte`), vamos a obtener los filtros disponibles basados en el listado de productos. Para ello puedes usar la función `getAvailableFilters` y guardar su resultado en una variable que luego utilizaremos.

2. También vamos a crear una variable para conocer en cada momento cuales son los filtros que al usuario le interesan (`let currentFilters = []`)

3. Como ya tenemos los filtros disponibles. Vamos a renderizarlos para darle al usuario la oportunidad de usarlos. Pinta los filtros en bulce dentro del `<div>` con `id="filters"` con la siguiente estrucura HTML:

   ```javascript
   <div class="vtmn-w-1/3">
   	<label>
   		<input type="checkbox" value={nombre_filtro} />
   		{nombre_filtro}
   	</label>
   </div>
   ```

   ¿Como hacemos que cada checkbox clicado guarde su valor como filtro requerido? 🤔 [Link](https://svelte.dev/examples/group-inputs)

   Si has llegado hasta aquí, tu variable `currentFilters` se actualizará automaticamente cada vez que un checkbox cambie 🪄

Y ahora, la parte más compleja de la lógica...👇

Ahora vamos a atacar a la lógica que obtenia productos filtrados. Teniamos solo una condición, filtrado por búsqueda. Vamos a evolucionar este bloque haciendo uso de los bloques `if-else`.

Ten en cuenta que:

- Si es una busqueda válida y hay filtros aplicados --> debemos aplicar dos filtros (`getProductsByName` y `getProductsByBrand`)
- Si una de los 2 condiciones primeras no se cumple, entonces las aplicaremos por separado. Si es una búsqueda valida (`getProductsByName`).
- Si hay filtros aplicados (`getProductsByBrand`)
- Si nada de lo anterior se ha cumplido, entonces no hago nada y se mostrarán el total de productos

#### Solución

Disponible en la rama [demo/solution-5](https://github.com/rcasas21/demo-svelte-ecommerce/tree/demo/solution-5)
