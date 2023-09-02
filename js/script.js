// Array extraño
const strangeArray = [
  "Zero",
  function () {
    alert("Hola soy una función en un array");
  },
  22,
  null,
  "Go lang",
  undefined,
  "Cobol",
  "I'm programmer",
  -2000,
  "Hello world",
  `One is ${1}`,
  { name: "Info", lastname: "last info" },
  () => true,
  function showNumbers() {
    return "1, 2, 3, 4";
  },
  "Another String",
  ["Hola mundo!"],
  "b is a letter",
  "JavaScript",
];

// Función que recibe por parámetro un array y muestra sus elementos en pantalla
function showList(array) {
  const container = document.getElementById("list");
  container.innerHTML = "";
  // Más info de forEach => https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
  array.forEach((element) => {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(element));
    container.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", (e) => {
  // Escribe tu solución aquí
  strangeArray.sort();
  // Filtra los elementos de tipo string
  const arreglofiltrado = strangeArray.filter((element) => typeof element === "string");
// Ordena el arreglo "stringElements" de manera insensible a mayúsculas y minúsculas utilizando "localeCompare"
  const arregloordenado= arreglofiltrado.sort((a, b) => a.toUpperCase().localeCompare(b.toUpperCase()));

 // utiliza la funcion "showList" y muestra el arreglo ordenado.
  showList(arregloordenado);
});
