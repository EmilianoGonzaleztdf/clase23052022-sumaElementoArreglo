let nArray: number = Number(prompt("ingrese la dimension del array"));
let numberArray: number[] = new Array(nArray);
let i: number;
let resultado: number = 0; //inicializo resultado en valor 0 para poder usarlo matematicamente despues :D

for (i = 0; i < nArray; i++) {
  numberArray[i] = Number(
    prompt("ingrese el valor numerico asignado a la posicion " + i)
  );
} //ingreso la longitud del array
console.log("la longitud del array es: " + nArray);
for (i = 0; i < nArray; i++) {
  console.log(
    "usted ingreso el valor " + numberArray[i],
    "en la posicion " + i
  );
} //ingreso los valores del array
for (i = 0; i < nArray; i++) {
  let suma = numberArray[i] + resultado;
  let resultadosuma = suma;
  resultado = resultadosuma;
} //sumo los valores
console.log("la suma de los valores ingresados al array es: " + resultado);
