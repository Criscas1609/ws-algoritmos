`use strict`;
let carrito=[];
let trbody_html=document.querySelector(`.tbody`);
export default function añadir_objeto(e){
    const button_2 = e.target
    //Obtiene toda la clase que contiene a al producto
    let contenedor_articulo = button_2.closest(`.card`);
    let nombre_articulo = contenedor_articulo.querySelector(`.card-title`).textContent;
    let imagen_articulo = contenedor_articulo.querySelector(`.card-img-top`).src;
    let precio_articulo = contenedor_articulo.querySelector(`.precio`).textContent;
    const objeto_articulo = {
      "Nombre": nombre_articulo,
      "Imagen": imagen_articulo,
      "Precio": precio_articulo,
      "Cantidad": 1
    }
    añadir_al_carrito(objeto_articulo);
  }
  // ciclo que mira si el producto esta repedido y no agregarlo 2 veces si no aumentar la cantidad
    function añadir_al_carrito(objeto_articulo){
      for(let i =0; i < carrito.length ; i++){
        if(carrito[i].Nombre.trim() === objeto_articulo.Nombre.trim()){
          carrito[i].Cantidad ++;
        }
      }
      carrito.push(objeto_articulo);
    mostrar_html(carrito)
    }
  
    //Con esta funcion nos muestra el producto en el apartado de carrito
  function mostrar_html(carrito){
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
            trbody_html.appendChild(new_tr)
        })
    }