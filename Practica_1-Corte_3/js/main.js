let i=0
const arreglo=[]
function captura (){
let producto = document.getElementById("nuevop").value
let precio = document.getElementById("precio").value
let cantidad = document.getElementById("cantidad").value
let categoria = boton_r ()
let posicion = posicion_p ()
let crear1 = document.createElement("p1");
let guardar = document.getElementById("save")
guardar.addEventListener('click', validate);
arreglo[i]=[producto,precio,cantidad,categoria,posicion]
alert(arreglo)
crear1.innerText = arreglo[i]
document.body.appendChild(crear1);
i++
}
function validate(e){
    //Creamos nuestra funcion de validacion
        e.preventDefault();
}
function boton_r (){
    if(document.getElementById(`juegos`).checked) {
        categoria=document.getElementById(`juegos`).value
        return categoria
    }
    if(document.getElementById(`comida`).checked) {
        categoria=document.getElementById(`comida`).value
        return categoria
    }
    if(document.getElementById(`otros`).checked) {
        categoria=document.getElementById(`otros`).value
        return categoria
    }
}
function posicion_p (){
    if(document.getElementById(`comienzo`).checked) {
        posicion=document.getElementById(`comienzo`).value
        return posicion
    }
    if(document.getElementById(`final`).checked) {
        posicion=document.getElementById(`final`).value
        return posicion
    }

}