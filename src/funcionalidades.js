AOS.init() // libreria de animaciones al hacer scroll
require('./style.css')

const botonMenuDespegable = document.getElementById('hamburgermenu');
const contenedorDespegable = document.getElementById('contenedorDespegable');

// Funcionalidad del menu Despegable


//Abrir el menu
botonMenuDespegable.addEventListener("click", () => {
    document.body.style.overflow = 'hidden';
    contenedorDespegable.style.display = 'grid';
})

//Cerrar el menu
contenedorDespegable.addEventListener('click', () => {
    document.body.style.overflow = 'auto';
    contenedorDespegable.style.display = 'none';
})


// Funcionalidad del carrusel de imagenes
if(document.querySelector('.listslider')){
    let link = document.querySelectorAll(".listslider li a");
    link.forEach(function(link) {
        link.addEventListener('click', function(e){
            e.preventDefault();
            let item = this.getAttribute('itlist');
            let arrItem = item.split("_");
            ejecutarSlider(arrItem[1]);
            return false;
        });
    });
}
 
function ejecutarSlider(flecha){
    let parentTarget = document.getElementById('slider');
    let elements = parentTarget.getElementsByTagName('li');
    let curElement, nextElement;
 
     for(var i=0; i<elements.length;i++){
 
         if(elements[i].style.opacity==1){
             curElement = i;
             break;
         }
     }
     if(flecha == 'prev' || flecha == 'next'){
 
         if(flecha=="prev"){
             nextElement = (curElement == 0)?elements.length -1:curElement -1;
         }else{
             nextElement = (curElement == elements.length -1)?0:curElement +1;
         }
     }else{
         nextElement = flecha;
         flecha = (curElement > nextElement)?'prev':'next';
 
     }
     //RESALTAR LOS PUNTOS
     let elementSel = document.getElementsByClassName("listslider")[0].getElementsByTagName("a");
     elementSel[curElement].classList.remove("item-select-slid");
     elementSel[nextElement].classList.add("item-select-slid");
     elements[curElement].style.opacity=0;
     elements[curElement].style.zIndex =0;
     elements[nextElement].style.opacity=1;
     elements[nextElement].style.zIndex =1;
}


// Funcionalidad guardar registro en MONGO_DB
const formularioSorteo = document.getElementById('form-sorteo');

formularioSorteo.addEventListener('submit', async (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const genero = document.getElementById('genero').value;
    const correo = document.getElementById('correo').value;
    
    if(!nombre || !apellido || !genero || !correo) return window.alert('ERROR: Todos los campos son obligatorios')
    if(genero === 'null') return window.alert('ERROR: Selecciona tu genero');

    const respuesta = await fetch('http://localhost:3000/api/registrar-usuario', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({nombre, apellido, correo, genero}),
      });;
    const data = await respuesta.json();

    if (data.error) return window.alert(`ERROR: ${data.mensaje}`)
    formularioSorteo.reset();
    window.alert(data.mensaje);
})