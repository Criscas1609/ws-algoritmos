'use strict';
const buttonAdd= document.getElementById("addBtn");
import añadir_objeto from "./obtener.js";
import validacionForm from "./formulario.js"
import guardar_info from "./obtener.js"
//local storage
if(localStorage.getItem("usuario")!=null){
  alert("Bienvenid@ "+localStorage.getItem("usuario"));
}
else{
  let nombre= prompt("ingrese nombre");
  localStorage.setItem("usuario",nombre);
}
//al momento de dar click en el carrito, se llama a la funcion de obtener en el otro JS
let boton_agregar = document.querySelectorAll(`.button`);
  boton_agregar.forEach(producto => {
      producto.addEventListener(`click`, añadir_objeto)
    });
  
  form.addEventListener("submit", (e) => {
      e.preventDefault();
      let condicion = validacionForm();
      if (condicion) {
        form.reset();
        alert("Pedido enviado, el restaurante se comunicara contigo");
      }
    });
