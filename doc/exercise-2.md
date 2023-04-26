##### [Castellano]

### 2. Crear un store, enlazarlo al buscador y notificar al usuario

Con este paso, sabremos en todo momento lo que el usuario esta buscando.

1. Crea un nuevo store con el nombre `searchInput`, puedes apoyarte en uno ya existente (`listProducts`)

2. Vamos al componente `<Header />` el cual contiene la barra de búsqueda.

3. Importemos el store que acabamos de crear y hagamos que el `<input>` le pase los datos de forma automatica (`bind:value`)

Vamos ahora a mostrarle al usuario que conocemos lo que esta buscando gracias al `store` y así se lo notificaremos:

1. Volvamos al componente `+page.svelte` y busquemos el `<div>` con `id="search"`, vamos a trabajar sobre el.

2. Importa el nuevo store que creaste, te será fácil porque ya teniamos un store en esta página.

3. Vamos a crear dentro la siguente estructura HTML para pintar el mensaje:
   ```html
   <div>Aquí tienes los resultados para:</div>
   <div class="vtmn-italic vtmn-underline">{busqueda_actual}</div>
   ```
4. Utiliza el contenido del store para decirle al usuario lo que esta buscando que deberá ser lo mismo que introdujo en la barra de búsqueda.

#### Solución

Disponible en la rama [demo/solution-2](https://github.com/rcasas21/demo-svelte-ecommerce/tree/demo/solution-2)
