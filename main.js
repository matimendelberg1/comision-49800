//selectores

const formulario = document.getElementById('formulario');
const inputBuscar = document.getElementById('inputBuscar');
const articulosContenedor = document.getElementById('articulosContenedor');


//arrays
let productos = JSON.parse(localStorage.getItem("productos")) || [];


//funciones 
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}

//ingresar por texto
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const precio = document.getElementById('precio').value;

    if (nombre && precio) {
        const producto = new Producto(nombre, precio);
        productos.push(producto);
        console.log('Productos agregados:', productos);
        mostrarProductos();
        formulario.reset();
    }
});
// funcion mostrar
function mostrarProductos() {
    articulosContenedor.innerHTML = '';
    productos.forEach((producto, index) => {
        const idUnico = 'producto-${index}'
        const card = document.createElement('div');
        card.classList.add('card', 'mb-3');
        card.style.width = '18rem';
        card.innerHTML = `
        <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <h6 class="card-subtitle mb-2 text-muted">$${producto.precio}</h6>
            <button class="btn btn-danger" data-index="${index}">Eliminar</button>
        </div>
    `;
    articulosContenedor.appendChild(card);
    document.querySelectorAll('.eliminar-btn').forEach((button) => {
        button.addEventListener('click', (event) => {
            const index = event.target.dataset.index;
            eliminarProducto(index);
        });
    });
    });
    console.log('Productos mostrados:', productos);
    
}

// función eliminar
function eliminarProducto(uniqueId, index) {
    productos.splice(index, 1);

    const elementoHTML = document.getElementById(uniqueId);
    if (elementoHTML) {
        elementoHTML.remove();
    }
    console.log('Productos después de eliminar:', productos);
}

// funcion agregar
document.querySelectorAll('.add-to-cart').forEach((button) => {
    button.addEventListener('click', () => {
        const nombre = button.parentElement.querySelector('h3').innerText;
        const precio = button.parentElement.querySelector('h4').innerText.slice(1);

        const producto = new Producto(nombre, precio);
        productos.push(producto);
        console.log('Productos despues de agregar con botón:', productos);
        mostrarProductos();
    });
});