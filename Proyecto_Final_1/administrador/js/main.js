let cuerpo = document.getElementById("cuerpo")
const url= "https://62a72da897b6156bff8967a6.mockapi.io/";
let platos=[];

const getInfo=async(resource)=>{
    const response= await fetch(url+resource);
    return response.json();
}

window.onload = async function getUsers(){
    platos=await getInfo("comida");
    showInfo();
}

async function showInfo(){
    cuerpo.innerHTML="";
    console.log(platos)
    platos.map(item=>{
        cuerpo.innerHTML+=item+"<br>";
    })
}