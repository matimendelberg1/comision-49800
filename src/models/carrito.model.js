

export const crearArticulo = (texto) => {
    let nuevoArticulo = {
        id: Date.now().toString(36),
        titulo: "BOWL ENLOZADO",
        precio: texto,
        imagen: "./assets/BOWL_ENLOZADO.jpg"
    }
    return nuevoArticulo;
}
