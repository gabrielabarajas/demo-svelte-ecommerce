##### [Castellano]

Bienvenido/a a esta mini demo donde pondremos en practica algúnos conceptos y sintaxis básica de Svelte para llevar a caba una simulación de una pagína de decathlon.es

## Introducción

La aplicación esta montada con SvelteKit, e incluye el sistema de diseño de Decathlon (no es mandatorio usarlo para la práctica).

La estructa principal con la que trabajaremos tiene este aspecto.

```bash
└─ src
    │
    ├─ components               # Componentes del proyecto
    │   ├─ Common               # Componentes comunes
    │   │   └─ **/*.svelte
    │   ├─ Layout               # Componentes del layout
    │   │   └─ **/**.svelte
    │   └─ Scope                # Componentes por scope o rango
    │       └─ **/**.svelte
    │
    ├─ routes                   # Rutas (solo tendremos una)
    │   └─ +page.svelte
    │
    ├─ services                 # Servicios
    │   ├─ api.js
    │   └─ *.js
    │
    ├─ stores                   # Stores
    │   └─ *.js
```

## Ejercicios

### 1. Renderizar el listado de productos

Para poder pintar el listado, la aplicación debe saber donde se encuentran. Para este primer ejecicios se proporciona un archivo `/src/services/api.js` con el contenido de los productos.

1. Crea dentro de `/src/stores/index.js` un store con el nombre `listProducts`
2. Importa `api` y asignaselo de inicio al store creado.
3. Vamos al componente principal de nuestra aplicación, `+page.svelte`. Importa el `store` que acabamos de crear guárdalo en una variable.
4. Pinta en bucle el listado de productos, haciendo uso del componente `<Product />` proporcionado.
5. Haz que el componente `<Product />` reciba por parametros los datos y rellene los mismos en el template proporcionado.

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

### 3. Filtrar los productos por la búsqueda en cuestión

Una vez que el usuario comience su búsqueda, nuestra lista de productos irá cambiando en función de lo que vaya buscando. Vamos a practicar la reactividad 💪

Para este ejercicio, tienes disponible la función `getProductsByName` dentro de `/src/services/filters.js` que hará el filtrado por ti, pero si te atrevés puedes programarla tu mismo.

1. Antes de todo vamos a crear una nueva variable `filterProducts` que contendran los productos filtrados, pues los productos totales nos interesa seguir conociendo cuales son.

2. Podemos ahora decirle a la aplicación, que dicha variable es igual a `products` e ir al bucle del ejercicio `1` y decirle que ahora renderice los productos del filtrado. No debe ocurrir nada porque de primeras el filtrado contiene el total de productos.

3. Vamos a programar un bloque reactivo. Cada vez que la búsqueda en el input del store cambie, debemos calcular los productos filtrados.
   [Usa un bloque `if` con la reactividad declarada `$:`](https://svelte.dev/examples/reactive-statements). Dentro del bloque, reasigna el valor a `filterProducts` con lo que retorne la función `getProductsByName`

4. Si has seguido todo bien, tu búsqueda será reactiva. Enhorabuena 🎉 !

### 4. Vamos a introducir una validación a la búsqueda

Solo contarán como búsquedas validas, aquellas búsquedas con más de 3 carácteres.

1. Vamos a crear una nueva variable (`validSearch`) reactiva, que cambie cada vez que el store de búsqueda cambie.

2. El valor de dicha variable será la propia búsqueda en caso de que sea mayor a 3 carácteres o bien vacio ("") en el caso de ser 3 o menos.

3. Vamos a "capar" el mensaje que mostramos al usuario. Solo se mostrará si `validSearch` tiene contenido.

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

## Conclusión

Si has llegado hasta aquí, enhorabuena porque habrás completado la demo y habrás aprendido un poquito más de Svelte.

No te preocupes si algo no lo entendiste o si no te salió del todo bien, las soluciones a cada fase de la demo las tiene en diferentes ramas del repositorio. Ves a revisarlas y compara que no llegaste a concluir 💪

Si quieres que revise tu PR una vez la hayas finalizado, puedes subir tu rama con la nomenclatura `solution-{tu_pefil_Github}`, ejemplo: `solution-rcasas21` y pedirme que la revise solicitando review dentro de la PR.

Espero hayas disfrutado y aprendido con Svelte! 👋
