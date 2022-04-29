
const descuento = document.getElementById("boton1")
descuento.onclick=des

let rebaja = Math.floor((Math.random() * 4) + 1)*10;
function des(){
    alert(` Sorpresa Tienes ${rebaja}% en tu compra`)
}