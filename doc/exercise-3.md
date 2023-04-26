##### [Castellano]

### 3. Filtrar los productos por la búsqueda en cuestión

Una vez que el usuario comience su búsqueda, nuestra lista de productos irá cambiando en función de lo que vaya buscando. Vamos a practicar la reactividad 💪

Para este ejercicio, tienes disponible la función `getProductsByName` dentro de `/src/services/filters.js` que hará el filtrado por ti, pero si te atrevés puedes programarla tu mismo.

1. Antes de todo vamos a crear una nueva variable `filterProducts` que contendran los productos filtrados, pues los productos totales nos interesa seguir conociendo cuales son.

2. Podemos ahora decirle a la aplicación, que dicha variable es igual a `products` e ir al bucle del ejercicio `1` y decirle que ahora renderice los productos del filtrado. No debe ocurrir nada porque de primeras el filtrado contiene el total de productos.

3. Vamos a programar un bloque reactivo. Cada vez que la búsqueda en el input del store cambie, debemos calcular los productos filtrados.
   [Usa un bloque `if` con la reactividad declarada `$:`](https://svelte.dev/examples/reactive-statements). Dentro del bloque, reasigna el valor a `filterProducts` con lo que retorne la función `getProductsByName`

4. Cuidado, hay otra condición (`else`). En el caso de que el store `searchInput` este vacio porque el usuario borre la búsqueda, deben volver a mostrarse el listado toal de productos pues no hay filtro aplicado.

5. Si has seguido todo bien, tu búsqueda será reactiva. Enhorabuena 🎉 !

#### Solución

Disponible en la rama [demo/solution-3](https://github.com/rcasas21/demo-svelte-ecommerce/tree/demo/solution-3)
