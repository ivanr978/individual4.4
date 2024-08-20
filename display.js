// display.js

export function displayResults(results) {
  const resultContainer = document.getElementById("result-container");
  resultContainer.innerHTML = results
    .map(
      (pokemon) =>
        `<div>${pokemon.id}: ${pokemon.name} - Types: ${pokemon.types.join(", ")}</div>`
    )
    .join("");
}
