function captura (){
let producto = document.getElementById("nuevop").value
let precio = document.getElementById("precio").value
let cantidad = document.getElementById("cantidad").value
let categoria = document.getElementsByClassName("categoria").value
alert(`${producto}---$ ${precio}---${cantidad}----${categoria}`)
}