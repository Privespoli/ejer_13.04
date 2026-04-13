# ejer_13.04
🚀 Ejercicio: El Inventario de la Nave Intergaláctica
Contexto: La nave "Gemini-26" ha aterrizado en un planeta desconocido. El equipo debe gestionar los recursos recolectados. Para que el sistema funcione, el Alumno A preparará los datos, el Alumno B diseñará la interfaz, y juntos programarán la lógica de procesamiento.

📥 Parte A: El Motor de Datos (Alumno A)
Tu objetivo es crear la estructura de datos y la lógica de obtención de recursos usando Clases y Asincronía.
Clase Producto: Crea una clase Producto con propiedades: nombre, categoria (combustible o comida) y cantidad.
Simulador de Carga: Crea una función asíncrona obtenerRecursosExternos() que, tras una pausa de 2 segundos (usa setTimeout y Promises), devuelva un array con al menos 4 objetos de la clase Producto.
Exportación: Asegúrate de que el array resultante esté disponible para cuando tu compañero lo necesite.

🎨 Parte B: El Panel de Control (Alumno B)
Tu objetivo es crear la interfaz visual (HTML/CSS) y la estructura donde se mostrarán los datos.
HTML: Crea un contenedor principal, un título llamativo y un botón que diga "Escanear Recursos". Además, crea un div vacío con un ID específico para mostrar los resultados.
CSS: Dale un estilo "espacial" (fondo oscuro, fuentes neón, bordes redondeados).
Selector JS: Crea las variables en JavaScript que capturen esos elementos del DOM usando document.querySelector.

🤝 Parte C: La Fusión (Trabajo en Pareja)
Ahora deben unir sus archivos. La lógica final requiere que ambos hayan cumplido su parte para que el sistema funcione. Deben programar lo siguiente:
Evento: Al hacer clic en el botón de la Parte B, se debe disparar la función asíncrona de la Parte A.
Ciclos y Condicionales:
Una vez recibidos los datos, recorran el array con un ciclo (forEach o for...of).
Usen un condicional para verificar la categoría:
Si es "combustible", el texto debe aparecer en rojo.
Si es "comida", el texto debe aparecer en verde.
Renderizado: Inyecten los elementos en el contenedor del DOM que creó el Alumno B.

💡 Requisitos Técnicos para la Revisión
Alumno A: Debe demostrar el uso correcto de new Producto(...) y await.
Alumno B: Debe tener un HTML limpio y selectores que coincidan con lo que se usará en la Parte C.
Ambos: Deben explicar cómo pasaron la información de la lógica de datos a la interfaz.
Tip para el profesor: Si el Alumno A falla en la clase, el Alumno B no podrá leer las propiedades. Si el Alumno B falla en el HTML, el Alumno A no tendrá dónde mostrar los datos. ¡Dependencia total!

