import htmlElements from "./elements/elements";
import articulosManager from "./managers/agregar.manager";

export const app = () => {
    // Ejecutamos actividad iniciales
    console.log("Ejecutamos aplicacion");
    htmlElements.buscar.onsubmit = (event) => {
        event.preventDefault();
        console.log("Evento submit manejado");
        articulosManager.agregarArticulo();
        
    }
    articulosManager.mostrarArticulos();
}