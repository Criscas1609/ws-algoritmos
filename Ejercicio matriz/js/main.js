let estudiantes = prompt("¿Cuantos estudiates hay?")
let i=0
let var1=0
let var2=0
let cant=0
let var3=0
let var4=0
let prom=0
let estudent=""
const arregloEst_Not =[[0],[1]]

//Pregunatr por estudiante y nota

for(i=0; i<estudiantes; i++){
    let nombreE = prompt("Nombre del estudiante")
    arregloEst_Not[0][i]=nombreE
    let notaE = prompt(`¿Cual es la nota del estudiante ${nombreE}?`)
    arregloEst_Not[1][i]=notaE
    document.write(`${arregloEst_Not[0][i]}-------${arregloEst_Not[1][i]}<br>`)
}

//Buscar nota mas alta

for(i=0; i<estudiantes; i++){
    if(var1<=arregloEst_Not[1][i]){
        var1=arregloEst_Not[1][i]
        cant=cant+1
        estudent=estudent+" - "+arregloEst_Not[0][i]//preguntar cuando el primero tiene una nota menor
    }
}
alert(`${var1} es la nota mas alta y la obtubieron ${cant} estudiantes ${estudent}`)

//Buscar nombre

let busNom = prompt("¿Que nombre desea buscar?")
for(i=0; i<estudiantes; i++){
    if(arregloEst_Not[0][i]==busNom){
        var3=arregloEst_Not[0][i]
        var4=arregloEst_Not[1][i]
    }
}
    if(busNom==var3){
        alert(`Estudiante encontrado: ${var3} y su nota es ${var4}`)
    }else
    alert("Estudiante no encontrado")   

//Promedio

for(i=0; i<estudiantes; i++){
    var2 =var2+parseInt(arregloEst_Not[1][i])
}
prom =var2/estudiantes
alert(`El promedio es ${prom}`)
document.write(`El promedio es ${prom}`)