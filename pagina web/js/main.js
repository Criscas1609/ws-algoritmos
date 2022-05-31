let crear1 = document.createElement("p1");
let parrafo = document.getElementById("p1")
let h2 = document.getElementById("nom")
if(localStorage.getItem("usuario")!=null){
    h2.innerHTML = ("Bienvenid@ "+localStorage.getItem("usuario"));
  }
  else{
    let nombre= prompt("ingrese nombre");
    localStorage.setItem("usuario",nombre);
  }
let i=0
const arreglo=[]
//Captura los datos
function captura (){
    let producto = document.getElementById("nuevop").value
    let precio = parseInt(document.getElementById("precio").value)
    let cantidad = parseInt(document.getElementById("cantidad").value)
    let categoria = boton_r ()
    let objecto={
        "categoria": categoria,
        "producto": producto,
        "cantidad": cantidad,
        "precio": precio
    }
    return objecto
    //console.log(arreglo[i]["categoria"]);
    let imprimir = imp()
}
function imp(){

    crear1.innerText = 
    `
    ${arreglo[i]}
    `
    parrafo.appendChild(crear1)
    i++
}
//Validar cual de las categorias selecciono
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
//Captura los datos

//principio de la lista
function comienzo(){
    arreglo.unshift(captura())
    alert("Producto agregado con exito")
}
//final de la lista
function final(){
    arreglo.push(captura())
    alert("Producto agregado con exito")
}
//Total de productos por cantidad
//Filter
function pcategoria(){
let buscarcat= prompt("Ingrese la categoria")
let array= arreglo.filter(objecto => objecto.categoria == buscarcat)
let totalcat=array.length
crear1.innerText = 
`
categoria encontrada ${buscarcat}
El total de la categoria es ${totalcat}
`
parrafo.appendChild(crear1)
}
//Total productos
//forEach
function tproductos(){
let contador=0
arreglo.forEach(objecto => {objecto.precio
    contador += objecto.precio
})
crear1.innerText = 
`
todo el valor de los productos que hay en la tienda es de: ${contador}
`
parrafo.appendChild(crear1)
}
//aumentar existencias
function suma(){
    let buscarpro= prompt("Ingrese el producto")
    let canti = parseInt(prompt("ingrese cuantas unidades desea sumar"))
    let arree= arreglo.findIndex(objecto => objecto.producto == buscarpro)
    arreglo[arree]["cantidad"] +=canti
}
//disminuir existencias
function resta(){
    let buscarpro= prompt("Ingrese el producto")
    let canti = parseInt(prompt("ingrese cuantas unidades desea sumar"))
    let arree= arreglo.findIndex(objecto => objecto.producto == buscarpro)
    arreglo[arree]["cantidad"] -=canti
}
//buscar producto
function buscar(){
    let buscartodo= prompt("Ingrese el producto a buscar")
    let arreglo1000= arreglo.find(objecto => objecto.producto == buscartodo)
    let cadena = `
    categoria: ${arreglo1000.categoria}
    nombre: ${arreglo1000.producto}
    precio: ${arreglo1000.precio}
    cantidad: ${arreglo1000.cantidad}
    `
crear1.innerText = 
`
${cadena}
`
parrafo.appendChild(crear1)
}
//Eliminar producto
function eliminar (){
let buscartodo= prompt("Ingrese el producto a buscar")
    let arreglo10000= arreglo.findIndex(objecto => objecto.producto == buscartodo)
arreglo.splice(arreglo10000,1)
}
//Imprimir alfabeticamente
function alfa (){
    let arreglo11 = [];
    for (let i = 0; i < arreglo.length; i++){
        arreglo11.push(arreglo[i].producto)
    }
    let alfabe = arreglo11.sort((a,b) => {
        if(a==b){
            return 0;
        }
        if(a<b){
            return -1;
        }
        if(a>b){
            return 1;
        }
    })
   console.log(alfabe)
crear1.innerText = 
`
${alfabe}
`
parrafo.appendChild(crear1)
}
//Metodo .map
let emojis = arreglo.map()