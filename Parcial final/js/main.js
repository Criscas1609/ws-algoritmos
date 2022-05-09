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
let cant=0
let estudent=""
for(i=0; i<estudiantes; i++){
if(var1<=arregloNota[i]){
var1=arregloNota[i]
cant=cant+1
estudent=estudent+" - "+arregloEs[i]
}}
alert(`${var1} es la nota mas alta y al obtubieron ${cant} estudiantes ${estudent}`)
//Buscar nombre
var3=0
var4=0
let busNom = prompt("¿Que nombre desea buscar?")
for(i=0; i<estudiantes; i++){
    if(arregloEs[i]==busNom){
    var3=arregloEs[i]
    var4=arregloNota[i]
    }}
    if(busNom==var3){
    alert(`Estudiante encontrado: ${var3} y su nota es ${var4}`)
    }else
    alert("Estudiante no encontrado")

//Promedio
let var2=0
parseInt
let prom=0
for(i=0; i<estudiantes; i++){
var2 =var2+parseInt(arregloNota[i])
}
prom =var2/estudiantes
alert(`El promedio es ${prom}`)
document.write(`El promedio es ${prom}`)