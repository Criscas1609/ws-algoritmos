'use strict';
//cart = carrito
let trbody_html = document.querySelector(`.tbody`)
let cart=[]
    export default function addToObject(e){
      const button_2 = e.target
      //Obtiene toda la clase que contiene a al producto
      let food_item = button_2.closest(`.card`);
      let name_item = food_item.querySelector(`.card-title`).textContent;
      let price_item = food_item.querySelector(`.precio`).textContent;
      let photo_item = food_item.querySelector(`.card-img-top`).src;
      const global_item = {
        "title": name_item,
        "price": price_item,
        "photo": photo_item,
        "stock": 1
      }
      addToCart(global_item)
    }
    function addToCart(global_item){
        //const InputElemnto = tbody.getElementsByClassName('input__elemento');
        for(let i =0; i < cart.length ; i++){
          if(cart[i].title.trim() === global_item.title.trim()){
            cart[i].stock ++;
            //const inputValue = InputElemnto[i]
            //inputValue.value++;
            //CarritoTotal()
            
            return null;
          }
        }
        cart.push(global_item)
        console.log(cart)
        show_in_carrito()
    }
    function show_in_carrito(){
        trbody_html.innerHTML=``;
        cart.map(item =>{
            let new_tr= document.createElement(`tr`)
            new_tr.classList.add(`itemCart`)
            let content = `
            <th scope="row">1</th>
            <td class="table__productos">
              <img src=${item.photo}  alt="">
              <h6 class="title">${item.title}</h6>
            </td>
            <td class="table__price"><p>${item.price}</p></td>
            <td class="table__cantidad">
              <input type="number" min="1" value=${item.stock} class="input__elemento">
              <button class="delete btn btn-danger">x</button>
            </td>
            `
            new_tr.innerHTML= content;
            trbody_html.appendChild(new_tr)
        })
    }
    