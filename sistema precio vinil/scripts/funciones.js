let opciones = document.getElementById("opciones");

let ancho= document.getElementById("ancho")

let alto= document.getElementById("alto")

let costo_material=0;

let nombre_opcion='';
let sumaTotal = 0;
let tabla = document.getElementById("miTabla");
let lista = document.getElementById("lista");
let totalCell = document.getElementById("total");
let formulario = document.getElementById("formulario")
totalCell.style.color = 'white';
totalCell.style.fontWeight = 'bold' 
totalCell.style.fontSize='20px'
// ancho.value=0
// alto.value=0
let obtenerSumaTotal = () => {
    let tabla = document.getElementById("miTabla");
    let filas = tabla.getElementsByTagName("tr");
    let sumaTotal = 0;

    for (let i = 1; i < filas.length; i++) {
        let celda3 = filas[i].getElementsByTagName("td")[3];
        let valorCelda3 = parseFloat(celda3.innerHTML);

        if (!isNaN(valorCelda3)) {
            sumaTotal += valorCelda3;
        }
    }

    
    totalCell.innerHTML = sumaTotal.toFixed(3) + " SOLES";


};

let agregarFila = () => {
    // console.log('34')
    
    let tabla = document.getElementById("miTabla");
    let tbody = tabla.getElementsByTagName("tbody")[0];
    let nuevaFila = tbody.insertRow(tbody.rows.length);

    let celda1 = nuevaFila.insertCell(0);
    let celda2 = nuevaFila.insertCell(1);
    let celda3 = nuevaFila.insertCell(2);
    let celda4 = nuevaFila.insertCell(3);
    let celda5 = nuevaFila.insertCell(4);

    celda1.innerHTML = nuevaFila.rowIndex + 0;
    celda2.innerHTML = nombre_opcion;
    celda3.innerHTML = ancho.value +' cm '+' x ' + alto.value + ' cm '
    celda4.innerHTML = Math.round((parseFloat(ancho.value * alto.value) * parseFloat(costo_material)) * 1000) / 1000; 
    celda5.innerHTML = "<button class='btn-eliminar ' type='button'>Eliminar</button>";

    obtenerSumaTotal();
    
    formulario.reset();
    opciones.selectedIndex = 0;
    opciones.value = opciones.options[0].value;
    console.log()
};


tabla.addEventListener('click', function(e) {
    if (e.target && e.target.classList.contains('btn-eliminar')) {
        let fila = e.target.parentNode.parentNode;
        let valor = parseFloat(fila.cells[3].innerHTML);
        let totalCell = document.getElementById("total");
        let sumaTotal = parseFloat(totalCell.innerHTML);

        sumaTotal -= valor;
        fila.remove();
        sumaTotal = Math.max(sumaTotal, 0);
        totalCell.innerHTML = sumaTotal.toFixed(3)+ " SOLES";
    }
});
let cambiaropciones =(event)=>{
   // Obtiene el valor de la opción seleccionada
   let valor = event.target.value;
let nombre = event.target.options[event.target.selectedIndex].text; 


//    console.log(valor); // Imprime el valor en la consola

   switch (nombre) {
    case "Vinil Gloss":
        nombre_opcion=nombre
      costo_material=valor/(60*(50*100))
      console.log(costo_material)
      break;
    case "Vinil Reflectivo":
        nombre_opcion=nombre
      costo_material=valor/(60*(50*100))
      console.log(costo_material)
      break;
      
    case "Vinil Cromado":
        nombre_opcion=nombre
      costo_material=valor/(60*(50*100))
      console.log(costo_material)
      break;
      
    case "Polarizado Económico":
        nombre_opcion=nombre
      costo_material=valor/(50*(60*100))
      console.log(costo_material)
      break;
      
    case "Polarizado DRS":
        nombre_opcion=nombre
      costo_material=valor/(50*(60*100))
      console.log(costo_material)
      break;
      
    case "Fibra de Carbono 3D":
        nombre_opcion=nombre
      costo_material=valor/(150*(30*100))
      console.log(costo_material)
      break;
      
    case "Fibra de Carbono 4D":
        nombre_opcion=nombre
      costo_material=valor/(150*(30*100))
      console.log(costo_material)
      break;
      
    case "Vinil Panorámico":
        nombre_opcion=nombre
      costo_material=valor/(150*(18*100))
      console.log(costo_material)
      break;
      
    default:
      console.log("El valor no es ni manzana ni banana");
  }
}

document.addEventListener("DOMContentLoaded", function() {
   
    
    
    var datos = {
        "Vinil Gloss": 240,
        "Vinil Reflectivo": 520,
        "Vinil Cromado": 520,
        "Polarizado Económico": 140,
        "Polarizado DRS": 270,
        "Fibra de Carbono 3D": 370,
        "Fibra de Carbono 4D": 420,
        "Vinil Panorámico": 410,
      };

    // Llena el select con los datos
    for (var valor in datos) {
        if (datos.hasOwnProperty(valor)) {
          var opcion = document.createElement("option");
          opcion.text = valor;
          opcion.value = datos[valor];
          opciones.appendChild(opcion);
        }
      }

    cambiaropciones({target: opciones});
    opciones.addEventListener('change',cambiaropciones)
 
     
});
