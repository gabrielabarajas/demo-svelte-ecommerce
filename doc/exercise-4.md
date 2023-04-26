##### [Castellano]

### 4. Vamos a introducir una validación a la búsqueda

Solo contarán como búsquedas validas, aquellas búsquedas con más de 3 carácteres.

1. Vamos a crear una nueva variable (`validSearch`) reactiva, que cambie cada vez que el store de búsqueda cambie.

2. El valor de dicha variable será la propia búsqueda en caso de que sea mayor a 3 carácteres o bien vacio ("") en el caso de ser 3 o menos.

3. Vamos a "capar" el mensaje que mostramos al usuario. Solo se mostrará si `validSearch` tiene contenido.

#### Solución

Disponible en la rama [demo/solution-4](https://github.com/rcasas21/demo-svelte-ecommerce/tree/demo/solution-4)
