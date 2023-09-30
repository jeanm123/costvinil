
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

function resetForm() {
  formulario.reset();
  var firstOption = opciones.options[0];
  var valor = firstOption.value;
  var nombre = firstOption.text;

  // Asignar los valores a las variables
  nombre_opcion = nombre;
  costo_material = valor / ((60*(50*100))-60*(9*100));

}
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
  if (isNaN(ancho.value) || isNaN(alto.value)) {
    alert("Please enter valid numeric values for width and height.");
    return;
  }
  const anchoValue = ancho.value;
const altoValue = alto.value;
  if (anchoValue.length === 0 || altoValue.length === 0) {
    alert("Por favor, ingrese valores válidos para el ancho y el alto.");
    return;
  }
    // opciones.selectedIndex = 0;
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
    celda4.innerHTML = Math.ceil((parseFloat(ancho.value * alto.value) * parseFloat(costo_material)) * 10) / 10; 
    celda5.innerHTML = "<button class='btn-eliminar ' type='button'>Eliminar</button>";

    obtenerSumaTotal();
    
    
    resetForm();
    // nombre_opcion='Vinil Gloss'
    // costo_material=240/(60*(50*100))
    
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
        totalCell.innerHTML = sumaTotal.toFixed(1)+ " SOLES";
    }
});
let cambiaropciones =(event)=>{
   // Obtiene el valor de la opción seleccionada
   let valor = event.target.value;
let nombre = event.target.options[event.target.selectedIndex].text; 


//    console.log(valor); // Imprime el valor en la consola
// se resta 9cm por metro cuadrado para restar los 3 cm de margen por lado
   switch (nombre) {
    case "Vinil Gloss":
        nombre_opcion=nombre
        costo_material=valor/((60*(50*100))-60*(9*100))

      break;
    case "Vinil Reflectivo":
        nombre_opcion=nombre
      costo_material=valor/((60*(50*100))-60*(9*100))
      break;
      
    case "Vinil Cromado":
        nombre_opcion=nombre
      costo_material=valor/((60*(50*100))-60*(9*100))
      break;
      
    case "Polarizado Económico":
        nombre_opcion=nombre
      costo_material=valor/((50*(60*100))-60*(9*100))
      break;
      
    case "Polarizado DRS":
        nombre_opcion=nombre
      costo_material=valor/((50*(60*100))-60*(9*100))
      break;
      
    case "Fibra de Carbono 3D":
        nombre_opcion=nombre
      costo_material=valor/((150*(30*100))-60*(9*100))
      break;
      
    case "Fibra de Carbono 4D":
        nombre_opcion=nombre
      costo_material=valor/((150*(30*100))-60*(9*100))
      break;
      
    case "Vinil Panorámico":
        nombre_opcion=nombre
      costo_material=valor/(150*(18*100))
      break;
      
    default:
      console.log("El valor no es ni manzana ni banana");
  }
}

let resultado = () =>{

}

document.addEventListener("DOMContentLoaded", function() {
   
    // se agrega 5 soles mas por metro para cubrir gastos fijos de alquiler, agua, luz,internet,pasaje,almuerzo, pago de material
    // alos materiales que vienen 1.50m se agrega 10 soles por metro
    
    var datos = {
        "Vinil Gloss": 440, //costo de material es de 220
        "Vinil Reflectivo": 700, //costo de masterial 500
        "Vinil Cromado": 700, //costo de material 500
        "Polarizado Económico": 320, //costo de material 120
        "Polarizado DRS": 450, //costo de material 250
        "Fibra de Carbono 3D": 650, //costo de rollo 350
        "Fibra de Carbono 4D": 700, //costo de rollo 400
        "Vinil Panorámico": 690, //costo de rollo 390
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
