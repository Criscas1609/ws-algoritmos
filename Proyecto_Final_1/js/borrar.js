import { total_carrito } from "./obtener.js";
export default function borrar_del_carrito(carrito,boton_borrar){
    let contenedor_articulo_2 = boton_borrar.closest(`.itemCart`);
    let titulo = contenedor_articulo_2.querySelector('.title').textContent;
    for(let i =0; i < carrito.length ; i++){
      if(carrito[i].Nombre.trim() === titulo.trim()){
        carrito.splice(i, 1);
      }}
    contenedor_articulo_2.remove();
    alert("producto eliminado");
    total_carrito();
}

