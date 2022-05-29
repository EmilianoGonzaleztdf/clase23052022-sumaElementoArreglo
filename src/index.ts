let nArray: number = Number(prompt("ingrese la dimension del array"));
let numberArray: number[] = new Array(nArray);
let i: number;

for (i = 0; i < nArray; i++) {
  numberArray[i] = Number(
    prompt("ingrese el valor numerico asignado a la posicion " + i)
  );
}

for (i = 0; i < nArray; i++) {
  console.log("los valores cargados al array son: " + numberArray[i]);
}
