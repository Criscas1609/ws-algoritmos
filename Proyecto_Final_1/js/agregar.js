import { total_carrito } from "./obtener.js";
export default function aumento_existencia(carrito,boton_suma){
    let contenedor_articulo_3 = boton_suma.closest(`.itemCart`);
    let titulo_2 = contenedor_articulo_3.querySelector('.title').textContent;
    carrito.forEach(item => {
        if(item.Nombre.trim() === titulo_2){
        boton_suma.value < 1 ?  (boton_suma.value = 1) : boton_suma.value;
          item.Cantidad = boton_suma.value;
          total_carrito()
        }
      })
}