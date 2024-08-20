// index.js

import { data } from "./data.js";
import { sortData } from "./ordenar.js";
import { displayResults } from "./display.js";

document.getElementById("sort-button").addEventListener("click", () => {
  const criterion = document.getElementById("sort-input").value.trim().toLowerCase();
  
  if (!criterion || (criterion !== "id" && criterion !== "name")) {
    alert("Por favor, ingresa 'id' o 'nombre' como criterio de ordenación.");
    return;
  }

  // Utilizar setTimeout para simular un retardo en el procesamiento
  setTimeout(() => {
    const sortedData = sortData(data, criterion);
    displayResults(sortedData);
  }, 500);
});
