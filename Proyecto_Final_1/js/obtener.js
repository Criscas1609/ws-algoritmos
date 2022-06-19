`use strict`;
import borrar_del_carrito from "./borrar.js"
import aumento_existencia from "./agregar.js"
//import removeItemCarrito from "./borrar.js"
//Carrito es el arreglo donde van a ir todos los objetos
 export let carrito=[];
// trbody_html es la variable donde obtengo tecnicamente el cuerpo del HTML
let trbody_html=document.querySelector(`.tbody`);

export default function añadir_objeto(e){
    const boton = e.target
    //Obtiene toda la clase que contiene a al producto
    let contenedor_articulo = boton.closest(`.card`);
    let nombre_articulo = contenedor_articulo.querySelector(`.card-title`).textContent;
    let imagen_articulo = contenedor_articulo.querySelector(`.card-img-top`).src;
    let precio_articulo = contenedor_articulo.querySelector(`.precio`).textContent;
    const objeto_articulo = {
      "Nombre": nombre_articulo,
      "Imagen": imagen_articulo,
      "Precio": precio_articulo,
      "Cantidad": 1
    }
    alert("producto añadido")
    añadir_al_carrito(objeto_articulo);
  }
  // ciclo que mira si el producto esta repedido y no agregarlo 2 veces si no aumentar la cantidad
    function añadir_al_carrito(objeto_articulo){
      let input_de_cantidad = trbody_html.getElementsByClassName(`input__elemento`)
      for(let i =0; i < carrito.length ; i++){
        if(carrito[i].Nombre.trim() === objeto_articulo.Nombre.trim()){
          carrito[i].Cantidad ++;
          const input_valor =input_de_cantidad[i];
          input_valor.value++;
          total_carrito();
          return null;
        }
      }
      carrito.push(objeto_articulo);
      mostrar_html(carrito);
    } 
  
    //Con esta funcion nos muestra el producto en el apartado de carrito
  function mostrar_html(){
        trbody_html.innerHTML=``;
        carrito.map(item =>{
            let new_tr= document.createElement(`tr`)
            new_tr.classList.add(`itemCart`)
            let content = `
            <th scope="row">1</th>
            <td class="table__productos">
              <img src=${item.Imagen}  alt="">
              <h6 class="title">${item.Nombre}</h6>
            </td>
            <td class="table__price"><p>${item.Precio}</p></td>
            <td class="table__cantidad">
              <input type="number" min="1" value=${item.Cantidad} class="input__elemento">
              <button class="delete btn btn-danger">x</button>
            </td>
            `
            new_tr.innerHTML= content;
            trbody_html.append(new_tr)
            new_tr.querySelector(".delete").addEventListener('click', quitar)
            new_tr.querySelector(".input__elemento").addEventListener('change', suma)
        })
        total_carrito();
    }
    //Esta funcion me permite mostrar el total en pantalla ademas lo suma
    export function total_carrito(){
      let precio_total=0
      const total_HTML = document.querySelector('.itemCartTotal')
      carrito.forEach((item) => {
        //para no tomarlos necesariamente el precio del objeto, lo toma desde el HTML y se quita el signo de precio
        //para poderlo trabajar mas facil
      let precio = Number(item.Precio.replace("$", ''));
      precio_total = precio_total + precio*item.Cantidad
      total_HTML.innerHTML = `Total $${precio_total}`
      añadir_al_localstorage()
      guardar_info(carrito)
    })
    
  };
    //Con esta funcion me elimina el articulo del carrito
    function quitar(e){
      const boton_borrar = e.target
      borrar_del_carrito(carrito,boton_borrar)
    }
    function suma(e){
      let boton_suma = e.target
      console.log(boton_suma)
      aumento_existencia(carrito, boton_suma)
    }
    function añadir_al_localstorage(){
      localStorage.setItem('carrito', JSON.stringify(carrito))
    }
    window.onload = function(){
      const storage = JSON.parse(localStorage.getItem('carrito'));
      if(storage){
        carrito = storage;
        mostrar_html()
      }
    }
    
    let url= "https://62a72da897b6156bff8967a6.mockapi.io/"
    export function guardar_info(carrito){
      fetch(url+"comida",{
          method:'POST',
          body:JSON.stringify(carrito),
          headers:{
              "Content-type":"application/json"
          }
      })
      .then(response=>response.json());
  }