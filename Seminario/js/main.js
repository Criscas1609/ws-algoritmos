let mensaje= "Hola Aspirante, Responde las siguientes preguntas"
alert(mensaje)
let matricula = 100000*0.7;
var i
for (i=1; i<=5; i++){
usuario=prompt("¿Vives en Armenia? "+ "Diga: Si o No")
if (usuario=="no"){
  alert("No se puede inscribir")
  i=1
  continue;
}
usuario2=prompt("Estas en grado 10° o 11° "+"Escriba 10 u 11 o No si no esta en ninguno")
if ((usuario == "si") && (usuario2 == "10"|| usuario2 == "11")){
  alert(`Tienes el 30% de descuento en la inscripción y pagas: ${matricula}`);
  if (i==1){
    alert("Como eres el primero en inscribirte, el costo del formulario es gratis :)")
  }
} else {
alert("No puedes inscribirte")
}}