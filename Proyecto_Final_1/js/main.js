import addToObject from "./obtener.js";
'use strict';
//obtener todos los botones
//product = articulo
let button = document.querySelectorAll(`.button`);
    button.forEach(product => {
      product.addEventListener(`click`, addToObject)
    });