const prompt = require('prompt-sync')();



//validación de entrada
do {
    var filas = Number(prompt("Indica el numero de filas: "));
	var columnas = Number(prompt("Indica el numero de columnas: "));
} while (filas < 1 || columnas < 1);

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

let gridCells = (filas, columnas) => {
  //var arrayCells = [];
  const matrix = new Array(filas).fill(".").map(() => new Array(columnas).fill("."));

  for (let i = 0; i < 3; i++) {
	let fila = random(0, filas - 1);
	let columna = random(0, columnas - 1);
	matrix[fila][columna] = "*";
  }
  
  return matrix;

};


console.log(gridCells(filas, columnas));

