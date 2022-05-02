let estudiantes = prompt("¿Cuantos estudiates hay?")
let i=0
const arregloNota =[i]
const arregloEs =[i]
//Pregunatr por estudiante y nota
for(i=0; i<estudiantes; i++){
    let nombreE = prompt("Nombre del estudiante")

    arregloEs[i]=nombreE
    let notaE = prompt(`¿Cual es la nota del estudiante ${nombreE}?`)
    arregloNota[i]=notaE
    document.write(`${arregloEs[i]}-------${arregloNota[i]}<br>`)
}
//Buscar nota mas alta
let var1=0
for(i=0; i<estudiantes; i++){
if(var1<arregloNota[i])
var1=arregloNota[i]
alert(`${var1} es la nota mas alta`)
}
//Buscar nombre
let busNom = prompt("¿Que nombre desea buscar?")
let EncNom= arregloEs.find(busNom => Element=busNom)
if(busNom==true){
alert(`Estudiante encontrado: ${EncNom}`)
} else {
    alert("No se encontro al estudiante")
}
//Promedio
let var2=0
let prom=0
for(i=0; i<estudiantes; i++){
var2 =var2+arregloNota[i]
}
prom =var2/estudiantes
alert(`El promedio es ${prom}`)