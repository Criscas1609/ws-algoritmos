let cuerpo = document.getElementById("cuerpo")
const url= "https://62a72da897b6156bff8967a6.mockapi.io/";

try {
  if(url === "https://62a72da897b6156bff8967a6.mockapi.io/"){
    alert("conectado con exito")
  }
} catch (error) {
  alert("no se pudo conectar")
}
let platos
const obtener_info=async(resource)=>{
    const response= await fetch(url+resource);
    return response.json();
}

window.onload = async function obtener_platos(){
    platos=await obtener_info("comida");
    mostrar_html();
}
async function mostrar_html(){
    cuerpo.innerHTML="";
    console.log(platos)
    platos.map(item=>{
       cuerpo.innerHTML+=`
       <br>
       <div class="col d-flex justify-content-center mb-4">
            <div class="card shadow mb-1 bg-dark rounded" style="width: 20rem;">
              <h5 class="card-title pt-2 text-center text-primary">${item.Nombre}</h5>
              <img src=${item.Imagen} class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="text-primary">Precio: <span class="precio">${item.Precio}</span></h5>
                <h5 class="text-primary">cantidad: <span class="precio">${item.Cantidad}</span></h5>
              </div>
            </div>
          </div>
       `;
    })
}
let boton_agregar = document.querySelectorAll(`.button`);
  boton_agregar.forEach(producto => {
      producto.addEventListener(`click`, producto_mas_seleccionado)
    });
async function producto_mas_seleccionado(e){
  let platillo = prompt("Que plato desea buscar")
  let busqueda_platos = platos.filter(objeto => objeto.Nombre == platillo)
  alert(`El plato llamado ${platillo} lo han seleccionado ${busqueda_platos.length} veces`)
}

