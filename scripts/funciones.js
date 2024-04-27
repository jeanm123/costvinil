
let opciones = document.getElementById("opciones");

let ancho= document.getElementById("ancho")

let alto= document.getElementById("alto")

let costo_material=0;
let nombre_opcion='';
let costo_material_real=0
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


// se agrega 5 soles mas por metro para cubrir gastos fijos de alquiler, agua, luz,internet,pasaje,almuerzo, pago de material
// alos materiales que vienen 1.50m se agrega 10 soles por metro
// el primer elemento es el ancho del material, el segundo es el largo total del material,el numero 100 es para convertir si esta en metros a centimetros
//60 que viene despues del 100 es el ancho del material , 9 es la cantidad de centimetros a descontar y 100 es para copnvertir a centimetros
//la ultima parte es para descontar los centimetros al material
//(60*(50*100))-60*(9*100)
let datos = [
  {
    id: 1,
    nombre: "Vinil Gloss MGFILMS",
    costo: 220,
    aumento:220,
    formula: (60*(50*100))-60*(9*100)
  },
  {
    id:2,
    nombre: "Vinil Gloss MCCAL",
    costo: 260,
    aumento:220,
    formula: (121*(25*100))-60*(9*100)
  },
  {
    id: 3,
    nombre: "Vinil Reflectivo",
    costo: 500,
    aumento:200,
    formula: (60*(50*100))-60*(9*100)
  },
  {
    id: 4,
    nombre: "Vinil Cromado",
    costo: 500,
    aumento:200,
    formula: (60*(50*100))-60*(9*100)
  },
  {
    id: 5,
    nombre: "Polarizado Económico",
    costo: 120,
    aumento:200,
    formula: (50*(60*100))-60*(9*100)
  },
  {
    id: 6,
    nombre: "Polarizado DRS",
    costo: 250,
    aumento:200,
    formula: (50*(60*100))-60*(9*100)
  },
  {
    id: 7,
    nombre: "Fibra de Carbono 3D",
    costo: 350,
    aumento:300,
    formula: (150*(30*100))-60*(9*100)
  },
  {
    id: 8,
    nombre: "Fibra de Carbono 4D",
    costo: 400,
    aumento:300,
    formula: (150*(30*100))-60*(9*100)
  },
  {
    id: 9,
    nombre: "Vinil Panorámico",
    costo: 390,
    aumento:200,
    formula: (150*(18*100))-60*(9*100)
  },
  {
    id: 10,
    nombre: "Vinil Impreso",
    costo: 25,
    aumento:0,
    formula: (150*(1*100))
  },
  {
    id: 11,
    nombre: "Vinil Impreso Plastificado",
    costo: 35,
    aumento:0,
    formula: (150*(1*100))
  },
  {
    id: 12,
    nombre: "Vinil M. Cromado",
    costo: 45,
    aumento:0,
    formula: (150*(1*100))
  },
  {
    id: 13,
    nombre: "Vinil L. China",
    costo: 60,
    aumento:0,
    formula: (150*(1*100))
  },
  {
    id: 14,
    nombre: "Fibra Carbono Camaleon",
    costo: 50,
    aumento:0,
    formula: (150*(1*100))
  },
  {
    id: 15,
    nombre: "Vinil Fotocromatico Moldeable",
    costo: 25,
    aumento:0,
    formula: (150*(1*100))
  }
];



function resetForm() {
  formulario.reset();
  var firstOption = opciones.options[0];
  console.log(firstOption.value)
  let dato = datos.find(dato => dato.id === parseInt(firstOption.value));

  // // Asignar los valores a las variables
  nombre_opcion = dato.nombre;
  costo_material = (dato.costo+dato.aumento) / ((60*(50*100))-60*(9*100));
  costo_material_real = dato.costo / ((60*(50*100))-60*(9*100));

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
    let celda6 = nuevaFila.insertCell(5);

    celda1.innerHTML = nuevaFila.rowIndex + 0;
    celda2.innerHTML = nombre_opcion;
    celda3.innerHTML = ancho.value +' cm '+' x ' + alto.value + ' cm '
    celda4.innerHTML = Math.ceil((parseFloat(ancho.value * alto.value) * parseFloat(costo_material)) * 10) / 10; 
    celda5.innerHTML = Math.ceil((parseFloat(ancho.value * alto.value) * parseFloat(costo_material_real)) * 10) / 10; 
    celda6.innerHTML = "<button class='btn-eliminar ' type='button'>Eliminar</button>";
    
    console.log(ancho.value)
    console.log(alto.value)
    console.log(costo_material)
    obtenerSumaTotal();
    
    
    resetForm();
    
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

   let idSeleccionado = event.target.value;
  let dato = datos.find(dato => dato.id === parseInt(idSeleccionado));
   nombre_opcion = dato.nombre
   costo_material= (dato.costo+dato.aumento)/dato.formula
   costo_material_real = dato.costo/dato.formula
  

}


document.addEventListener("DOMContentLoaded", function() {
   
  
    // Llena el select con los datos

    datos.forEach(function(objeto) {
      let opcion = document.createElement("option");
      opcion.value = objeto.id;
      opcion.text = objeto.nombre;
      opciones.appendChild(opcion);
    });

    cambiaropciones({target: opciones});
    opciones.addEventListener('change',cambiaropciones)
 
   
});
