/* solo me faltan 1 ejemplos y ya empiezo con el punto 4*/
//1. En el HTML lo que va en el parrofo lo cambia por la palabra hola y el element.innerHTML

var mensaje1= document.getElementById("P1").innerHTML= "Hola"
alert(`${mensaje1}<-- Este es el cambio que se realizo`)

//2. element.getElementsByTagName(name)

let elementos = document.getElementsByTagName("h2");
alert(elementos.length+ " elementos de h2");

//3. document.createElement(name)

const crear1 = document.createElement("p");
crear1.innerText = "Crear nuevo elemento";
document.body.appendChild(crear1);

/* 4. parentNode.appendChild(node)  esta en el punto anterior*/
/* 5. element.innerHTML esta en el primer punto */
// 6. element.style.left

alert(document.getElementById("P1").style.left);

// 7. element.setAttribute

document.getElementById("P2").setAttribute("href", "https://www.youtube.com/watch?v=Twi92KYddW4&ab_channel=KodyKaz");

// 8. element.element.getAttribute

const  var2 = document.getElementById("P4") 
let marca = var2.getAttribute("target");
document.getElementById("P5").innerHTML = marca;

// 9. element.addEventListener

//10. window.scrollTo

function scrollWin() {
    window.scrollTo(100, 100);
  }

//11. setTimeOut
function alerta5s(){
    setTimeout(mostraral, 10000);
    }
 function mostraral() {
    alert('cada 10 segundos la página mostrara una alerta');
    }
//12. setInterval
function alerta2 (){
    alert("Cada 5 seg te dire hola")
}
setInterval(alerta2,5000 )
// 13. Comfirm
function Funcion20() {
    confirm("Acepta o cancela");
  }
// 14. Arreglos: ForEach()
let arreg =["papas","cebolla","sal","queso","salchicha","salsas"]
alert(`Hay ${arreg.length} datos`)
for(let i=0; i<arreg.length; i++){
  console.log()
}