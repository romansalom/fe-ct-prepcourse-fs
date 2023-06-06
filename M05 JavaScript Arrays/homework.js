/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

const { suma } = require('../M03 JavaScript Fundamentos/Ejercicio 02');

function devolverPrimerElemento(array) {
  // Retornar el primer elemento del arreglo recibido por parámetro.
  // Tu código:
  return array[0];
}

function devolverUltimoElemento(array) {
  // Retornar el último elemento del arreglo recibido por parámetro.
  // Tu código:
  return array[array.length - 1];
}

function obtenerLargoDelArray(array) {
  // Retornar la longitud del arreglo recibido por parámetro.
  // Tu código:
  return array.length;
}

function incrementarPorUno(array) {
  // El arreglo recibido por parámetro contiene números.
  // Retornar un arreglo con los elementos incrementados en +1.
  // Tu código:
  var aumentarUno = array.map((arr) => {
    return arr + 1;
  });
  return aumentarUno;
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Agrega el "elemento" al final del arreglo recibido.
  // Retorna el arreglo.
  // Tu código:
  array.push(elemento);
  return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Agrega el "elemento" al comienzo del arreglo recibido.
  // Retorna el arreglo.
  // Tu código:
  array.unshift(elemento);
  return array;
}

function dePalabrasAFrase(palabras) {
  // El argumento "palabras" es un arreglo de strings.
  // Retornar un string donde todas las palabras estén concatenadas
  // con un espacio entre cada palabra.
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
  // Tu código:
  var palabraArreglada = palabras.join(' ');

  return palabraArreglada;
}

function arrayContiene(array, elemento) {
  // Verifica si el elemento existe dentro del arreglo recibido.
  // Retornar true si está, o false si no está.
  // Tu código:
  var existeElemento = array.includes(elemento);
  return existeElemento;
}

function agregarNumeros(arrayOfNums) {
  // El parámetro "arrayOfNums" debe ser un arreglo de números.
  // Suma todos los elementos y retorna el resultado.
  // Tu código:
  var suma = 0;
  for (i = 0; i < arrayOfNums.length; i++) {
    suma = suma + arrayOfNums[i];
  }
  return suma;
}

function promedioResultadosTest(resultadosTest) {
  // El parámetro "resultadosTest" es un arreglo de números.
  // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
  // Tu código
  var suma = 0; // Variable para almacenar la suma de los elementos
  for (var i = 0; i < resultadosTest.length; i++) {
    suma += resultadosTest[i]; // Suma cada elemento del arreglo a la variable suma
  }
  var promedio = suma / resultadosTest.length; // Calcula el promedio dividiendo la suma entre la longitud del arreglo
  return promedio;
}

function numeroMasGrande(arrayOfNums) {
  // El parámetro "arrayOfNums" es un arreglo de números.
  // Retornar el número más grande.
  // Tu código:
  return Math.max(...arrayOfNums);
}

function multiplicarArgumentos() {
  if (arguments.length === 0) {
    return 0; // Si no se pasan argumentos, retorna 0
  } else if (arguments.length === 1) {
    return arguments[0]; // Si se pasa un argumento, simplemente se retorna ese argumento
  } else {
    var producto = 1; // Variable para almacenar el producto
    for (var i = 0; i < arguments.length; i++) {
      producto *= arguments[i]; // Multiplica cada argumento con la variable producto
    }
    return producto; // Retorna el producto final
  }
}

function cuentoElementos(array) {
  // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
  // Tu código:
  var contador = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] > 18) contador++;
  }
  return contador;
}

function diaDeLaSemana(numeroDeDia) {
  // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
  // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
  // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
  // Tu código:
  if (numeroDeDia === 1) {
    return 'Es fin de semana';
  } else if (numeroDeDia === 2) {
    return 'Es dia laboral';
  } else if (numeroDeDia === 3) {
    return 'Es dia laboral';
  } else if (numeroDeDia === 4) {
    return 'Es dia laboral';
  } else if (numeroDeDia === 5) {
    return 'Es dia laboral';
  } else if (numeroDeDia === 6) {
    return 'Es dia laboral';
  } else if (numeroDeDia === 7) {
    return 'Es fin de semana';
  }
}

function empiezaConNueve(num) {
  let numeroAbsoluto = Math.abs(num); // 1. Obtener el valor absoluto del número para manejar casos negativos
  let numeroATexto = numeroAbsoluto.toString(); // 2. Convertir el número en una cadena de texto
  let primerNumero = parseInt(numeroATexto.charAt(0)); // 3. Obtener el primer carácter y convertirlo a número entero

  return primerNumero === 9; // 4. Retornar true si el primer número es 9, o false en caso contrario
}
empiezaConNueve(99);

function todosIguales(array) {
  // Utilizamos el método every() para verificar si todos los elementos cumplen con la condición
  return array.every(function (elemento) {
    // Comparamos cada elemento con el primer elemento del arreglo
    return elemento === array[0];
  });
}

function mesesDelAño(array) {
  // Definimos el arreglo con los meses que queremos buscar
  var mesesPedidos = ['Enero', 'Marzo', 'Noviembre'];

  // Filtramos los elementos del arreglo 'array' que estén presentes en 'mesesPedidos'
  var mesesEncontrados = array.filter(function (mes) {
    return mesesPedidos.includes(mes);
  });

  // Verificamos si se encontraron todos los meses pedidos
  if (mesesEncontrados.length === mesesPedidos.length) {
    // Si se encontraron todos, devolvemos el arreglo con los meses encontrados
    return mesesEncontrados;
  } else {
    // Si falta al menos uno de los meses, devolvemos un mensaje indicando que no se encontraron
    return 'No se encontraron los meses pedidos';
  }
}

function tablaDelSeis() {
  // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Tu código:
  resultados6 = [];
  for (let i = 0; i <= 10; i++) {
    const resulltado = 6 * i;
    resultados6.push(resulltado);
  }
  return resultados6;
}

function mayorACien(array) {
  // La función recibe un arreglo con enteros entre 0 y 200.
  // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
  // Tu código:
  const arreglo100 = array.filter((num) => num >= 101);
  return arreglo100;
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
  let resultado = num;
  let iteraciones = 0;
  const nuevoValores = [];

  while (iteraciones < 10) {
    resultado += 2;
    nuevoValores.push(resultado);
    iteraciones++;

    if (resultado === iteraciones) {
      return 'Se interrumpió la ejecución';
    }
  }

  return nuevoValores;
}

function continueStatement(num) {
  let resultado = num;
  let iteraciones = 0;
  const nuevoValores = [];

  while (iteraciones < 10) {
    iteraciones++;

    if (iteraciones === 5) {
      continue;
    }

    resultado += 2;
    nuevoValores.push(resultado);
  }

  return nuevoValores;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  tablaDelSeis,
  mayorACien,
  breakStatement,
  continueStatement,
};
