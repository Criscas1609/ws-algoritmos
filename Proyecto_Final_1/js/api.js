
let url= "https://62a72da897b6156bff8967a6.mockapi.io/"
export default function guardar_info(carrito){
      fetch(url+"comida",{
          method:'POST',
          body:JSON.stringify(carrito),
          headers:{
              "Content-type":"application/json"
          }
      })
      .then(response=>response.json());
  }