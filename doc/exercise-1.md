##### [Castellano]

### 1. Renderizar el listado de productos

Para poder pintar el listado, la aplicación debe saber donde se encuentran. Para este primer ejecicios se proporciona un archivo `/src/services/api.js` con el contenido de los productos.

1. Crea dentro de `/src/stores/index.js` un store con el nombre `listProducts`

   ```javascript
   import { writable } from 'svelte/store';

   export const listProducts = writable();
   ```

2. Importa `api` y asignaselo de inicio al store creado ([link](https://svelte.dev/examples/writable-stores))
3. Vamos al componente principal de nuestra aplicación, `+page.svelte`. Importa el `store` que acabamos de crear guárdalo en una variable.
   Ten en cuenta que a los datos dentro de un store se accede con `$` delante. En nuestro caso `$listProducts`
4. Pinta en bucle el listado de productos, haciendo uso del componente `<Product />` proporcionado. Dicho componente recibe un objeto por parametro con la información de cada producto:

   ```javascript
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
   ```

5. Haz que el componente `Product.svelte` reciba por parametros los datos y rellene los mismos en el template proporcionado.

#### Solución

Disponible en la rama [demo/solution-1](https://github.com/rcasas21/demo-svelte-ecommerce/tree/demo/solution-1)
