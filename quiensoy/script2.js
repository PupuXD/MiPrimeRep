// variables globales
let varGlobal1 = "Esta es una variable global";
let texto1 = null; // se asignará cuando se obtenga el elemento

function FCambioColor() {
  texto1 = document.getElementById("ejmDOM1");
  if (!texto1) return console.warn("No existe el elemento #ejmDOM1");

  texto1.textContent = "Texto cambiado por funcion FCambioColor()";
  texto1.style.color = "red";
  texto1.style.backgroundColor = "orange";
  texto1.insertAdjacentHTML("afterend", "texto adicional <br><br>");
  console.log("texto por consola");
}

function FCambioClase1() {
  const texto2 = document.getElementsByClassName("classDOM1");
  if (texto2.length === 0) return console.warn("No hay elementos con .classDOM1");

  if (texto2[1]) {
    texto2[1].innerText = "Elemento [1] del arreglo \n de clase classDOM1";
    texto2[1].style.color = "cyan";
  }

  if (texto2[0]) {
    texto2[0].innerText =
      "Elemento[0] del arreglo " +
      "de clase classDOM1 ; Concatenado del global: " +
      varGlobal1 +
      "\n y su tipo de variable es: " +
      typeof varGlobal1;
  }

  if (texto2[2]) {
    // usar <br> para saltos de línea en HTML
    texto2[2].innerHTML =
      "Tamaño del array = " + texto2.length + "<br> y su tipo de variable es: " + typeof texto2;
  }
}

function FCambioTag1() {
  const texto3 = document.getElementsByTagName("h2");
  if (!texto3 || texto3.length === 0) return console.warn("No hay <h2> en el documento");

  // primer h2
  if (texto3[0]) texto3[0].innerHTML = "Elemento 1er h2 cambia por TagDOM1";

  // último h2 (no asumir índice fijo)
  const ultimoIdx = texto3.length - 1;
  if (texto3[ultimoIdx]) {
    texto3[ultimoIdx].innerHTML = "Elemento ultimo h2 cambia por TagDOM1";
    texto3[ultimoIdx].style.color = "magenta";
  }

  // modificar la variable global
  varGlobal1 = "variable global modificada";

  // mostrar tipo de variable de varGlobal1 (si existe ese h2[11])
  if (texto3[11]) {
    texto3[11].innerHTML = `Tipo de variable de la varGlobal1 es: ${typeof varGlobal1}`;
  }
}

function FCrear1() {
  const lista = document.getElementById("ejmDOM1");
  if (!lista) return console.warn("No existe #ejmDOM1 para crear la lista");

  lista.style.backgroundColor = "white";
  lista.innerHTML =
    "  <ul align='right' style='color:rgb(47, 59, 34)'> " +
    " <li>Capacidad de atencion</li> " +
    " <li>Consultar dudas no resueltas</li> " +
    " <li>Repasar temas y realizar tareas en casa</li>" +
    " </ul> ";
}

function FAgregarTextoPermanete() {
  const elemento = document.getElementById("ejmDOM1");
  if (!elemento) return console.warn("No existe #ejmDOM1 para agregar texto");

  const texto4 = "<br><h3 style='font-size: 18px'> Agregado con concatenacion permanente</h3>";
  elemento.innerHTML = elemento.innerHTML + texto4;
  console.log(elemento.textContent);
}

function FCrearElemento() {
  const Elemento = document.getElementById("complementario1");
  if (!Elemento) return console.warn("No existe #complementario1");

  const nuevoh3 = document.createElement("h3");
  const texto = document.createTextNode("deporte favorito:");
  nuevoh3.appendChild(texto);
  Elemento.appendChild(nuevoh3);

  // crear input text
  const nuevoInputText = document.createElement("input");
  nuevoInputText.type = "text";
  Elemento.appendChild(nuevoInputText);
}

function FUsoFor1() {
  const vTextoClass = document.getElementsByClassName("classFOR1");
  if (vTextoClass.length === 0) return console.warn("No hay elementos .classFOR1");

  let vTextoTotal = "";
  for (let i = 0; i < vTextoClass.length; i++) {
    vTextoClass[i].style.border = "2px solid red";
    vTextoTotal += vTextoClass[i].innerText + "-";
  }

  const nuevoH1 = document.createElement("h1");
  nuevoH1.textContent = vTextoTotal;

  // añadir al último elemento disponible (evita index out of range)
  const targetIdx = vTextoClass[3] ? 3 : vTextoClass.length - 1;
  vTextoClass[targetIdx].appendChild(nuevoH1);
}

function FUsoForEach1() {
  const vTextoClass = document.querySelectorAll(".classFOR1");
  if (vTextoClass.length === 0) return console.warn("No hay elementos .classFOR1");

  let vTextoTotal = "";
  vTextoClass.forEach((iter) => {
    iter.style.border = "2px solid blue";
    vTextoTotal += iter.innerText + "-";
  });

  const nuevoH1 = document.createElement("h1");
  nuevoH1.textContent = vTextoTotal;
  vTextoClass[vTextoClass.length - 1].appendChild(nuevoH1);
}

function FEliminarConcat() {
  const vTextoClass = document.getElementsByClassName("classFOR1");
  if (vTextoClass.length === 0) return alert("No hay elementos .classFOR1");

  const rpta = prompt("¿Estás seguro que deseas eliminar el texto concatenado? (S/N)", "");
  if (!rpta) return alert("Operación cancelada");

  if (rpta.toLowerCase() === "s") {
    const rpta2 = prompt("Ingrese el número de la fila a eliminar (índice, empezando en 0)", "");
    const idx = parseInt(rpta2, 10);
    if (!isNaN(idx) && vTextoClass[idx]) {
      vTextoClass[idx].remove();
      alert("CONCATENACION ELIMINADA");
    } else {
      alert("Índice inválido");
    }
  } else if (rpta.toLowerCase() === "n") {
    alert("NO SE eliminará");
  } else {
    alert("OPCION INCORRECTA - ingresa nuevamente");
  }
}

function FCapturarNombre() {
  const vTexto1 = document.getElementById("NOMBRE");
  const vTexto2 = document.querySelectorAll("input.datospersonales");
  const vTexto3 = document.getElementById("clave");
  const observ = document.getElementById("observacion");

  if (!vTexto1) return console.warn("No existe el input #NOMBRE");

  vTexto1.style.color = "red";
  const valor1 = vTexto1.value || "";
  let valor2 = "";

  if (vTexto3) vTexto3.value = valor1;

  vTexto2.forEach((input) => {
    valor2 += `${input.name}: ${input.value}: ${input.id}\n`;
    input.style.border = "2px solid orange";
  });

  if (vTexto2[1]) vTexto2[1].style.backgroundColor = "green";
  if (observ) observ.value = valor2;

  console.log("El valor del nombre es:", valor1);
}