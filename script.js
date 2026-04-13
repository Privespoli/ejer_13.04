class Producto {
    constructor(nombre, categoria, cantidad) {
        this.nombre = nombre;
        this.categoria = categoria; // 'combustible' o 'comida'
        this.cantidad = cantidad;
    }
}

async function obtenerRecursosExternos() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const recursos = [
                new Producto("Cristales de Dilitio", "combustible", 50),
                new Producto("Raciones de Supervivencia", "comida", 120),
                new Producto("Celdas de Energía", "combustible", 25),
                new Producto("Fruta Estelar", "comida", 15)
            ];
            resolve(recursos);
        }, 2000);
    });
}

const btnEscanear = document.querySelector('#btnEscanear');
const contenedorResultado = document.querySelector('#resultado');


btnEscanear.addEventListener('click', async () => {
    

    contenedorResultado.innerHTML = '<p class="cargando">Escaneando recursos... Por favor, espere.</p>';
    
    try {
   
        const inventario = await obtenerRecursosExternos();
        
   
        contenedorResultado.innerHTML = "";

   
        for (const producto of inventario) {

            const tarjeta = document.createElement('div');
            tarjeta.classList.add('tarjeta');

     
            if (producto.categoria === "combustible") {
                tarjeta.classList.add('combustible');
            } else if (producto.categoria === "comida") {
                tarjeta.classList.add('comida');
            }

  
            tarjeta.innerHTML = `
                <strong>Recurso:</strong> ${producto.nombre} <br>
                <strong>Cantidad:</strong> ${producto.cantidad} unidades <br>
                <small>Categoría: ${producto.categoria.toUpperCase()}</small>
            `;

            contenedorResultado.appendChild(tarjeta);
        }

    } catch (error) {
        console.error("Error al obtener recursos:", error);
        contenedorResultado.innerHTML = "<p>Error en la conexión con el escáner.</p>";
    }
});