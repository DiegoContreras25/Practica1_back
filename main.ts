function quicksort(array: number[]): number[] {
  // Elegimos como indice el primer elemento del array
  const indice = array[0];

  // esto es para decir que si su tamaño es igual o menor a 1 ya esta ordenado
  if (array.length <= 1) {
    return array;
  }

  // creamos arrays para ir almacenando los superiores e inferiores
  const left = array.slice(1).filter((item) => item <= indice); // Elementos menores o iguales al indice
  const right = array.slice(1).filter((item) => item > indice); // Elementos mayores al indice

  // hacemos el quicksort recursivamente al array izq y derecho
  return [...quicksort(left), indice, ...quicksort(right)];
}

// Prueba de la funcion
const array = [1, 7, 5, 6, 8, 9, 9, 100, 24, 35, 10];
const sortedArray = quicksort(array);
console.log(sortedArray);
