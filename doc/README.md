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

Cada ejercicio consta de una pequeña parte/funcionalidad de la demo.

Dentro de cada uno encontraras su explicación y por si no consiguieras o no entendieras cada uno de ellos, al final he adjuntado la solución. De esta manera si te atascas en alguno puedes coger y/o comparar la solución y poder continuar correlativamente con todos los ejercicios.

Antes de ponernos manos a la obra, vamos a crear una rama para tu ejercicio. Usaremos la siguiente nomenclatura para la rama:

`feat/solution-{{tu_pefil_Github}}` ➡️ ejemplo: `feat/solution-rcasas21`

Con el repositorio ya clonado, haz los siguientes comandos:

```bash
git checkout -b feat/solution-{{your_profile}}
```

Ahora vamos con los ejercicios, Puedes encontrar su información en los siguientes enlaces:

1. [Renderizar el listado de productos](./exercise-1.md)
2. [Crear un store, enlazarlo al buscador y notificar al usuario](./exercise-2.md)
3. [Filtrar los productos por la búsqueda en cuestión](./exercise-3.md)
4. [Vamos a introducir una validación a la búsqueda](./exercise-4.md)
5. [Añadir filtros por deporte](./exercise-5.md)

## Conclusión

Si has llegado hasta aquí una vez completados los ejercicios, enhorabuena porque habrás completado la demo y habrás aprendido un poquito más de Svelte.

Si quieres que revise tu PR una vez la hayas finalizado, puedes subir la rama que creaste, crear una PR, y pedirme que la revise solicitando review dentro de la misma.

Espero hayas disfrutado y aprendido con Svelte! 👋
