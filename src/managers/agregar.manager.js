
import { crearArticulo } from "../models/carrito.model.js";
import htmlElements from "../elements/elements.js";

let articulos = JSON.parse(localStorage.getItem("articulos")) || [];
let carritoCompra = JSON.parse(localStorage.getItem("articulos")) || [];

// Carrito vacio
const mostrarArticulos = () => {
    
    console.log("Mostrando artículos");
    htmlElements.articulosContenedor.innerHTML = "";
    console.log(articulos);
    articulos.forEach(articulos => {
        let card = document.createElement("div")
        card.className = "col-md-4 mb-4";
        card.innerHTML = `
            <div class="card h-100 custom-card">
                <img src="${articulos.imagen}" class="card-img-top" alt="${articulos.titulo}">
                <div class="card-body">
                    <h5 class="card-title">${articulos.titulo}</h5>
                    <p class="card-text">${articulos.precio}</p>
                    <button class="btn btn-primary">Añadir</button>
                </div>
            </div>
        `;
        htmlElements.articulosContenedor.appendChild(card);
});
    
    
    
}
    
const agregarArticulo = () => {
    console.log("Agregando artículo. Valor del input:", htmlElements.inputBuscar.value);
    let articuloNuevo = crearArticulo(htmlElements.inputBuscar.value);
    articulos.push(articuloNuevo);
    localStorage.setItem("articulos", JSON.stringify(articulos));
    console.log(articulos);
    mostrarArticulos();

}




export default {
    mostrarArticulos,
    agregarArticulo,
}