/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*5️⃣ EJERCICIO 05 5️⃣*/

function esPositivo(num) {
  // La función recibe un entero. Devuelve como resultado un string que indica si el número
  // es positivo o negativo.
  // Si el número es positivo ---> "Es positivo".
  // Si el número es negativo ---> "Es negativo".
  // Si el número es 0, devuelve false.
  // Tu código:
  if (num > 0) {
    return 'Es positivo';
  } else if (num < 0) {
    return 'Es negativo';
  } else if (num === 0) {
    return false;
  }
}
esPositivo(2);
esPositivo(-2);
esPositivo(0);
function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final del string "str" y retórnalo
  // Ejemplo: "hello world" ---> "hello world!"
  // Tu código:
  for (var i = str; ; i + '!') {
    palabra = str + '!';
    return palabra;
  }
}
agregarSimboloExclamacion('hola');

function combinarNombres(nombre, apellido) {
  // Retorna "nombre" y "apellido" combinados en un mismo string pero separados por un espacio.
  // Ejemplo: ("Soy", "Henry") ---> "Soy Henry"
  // Tu código:
  nombreCompleto = nombre + ' ' + apellido;
  return nombreCompleto;
}
combinarNombres('Roman', 'Salom');

function obtenerSaludo(nombre) {
  // Toma el string "nombre" y concatena otra string en la cadena para que tome la siguiente forma:
  // Ejemplo: "Martin" ---> "Hola Martin!"
  // Tu código:
  saludar = 'Hola' + ' ' + nombre + '!';
  return saludar;
}
obtenerSaludo('Roman');

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el área de un rectángulo teniendo su altura y ancho.
  // Tu código:
  area = alto * ancho;
  return area;
}
obtenerAreaRectangulo(2, 3);

function retornarPerimetro(lado) {
  // La función recibe como argumento la medida de un lado de un cuadrado.
  // Debes retornar su perímetro.
  // Tu código:
  permetro = lado * 4;
  return permetro;
}
retornarPerimetro(34);

function areaDelTriangulo(base, altura) {
  // Calcula el área de un triángulo y retorna el resultado.
  // Tu código:
  areaTriangulo = (base * altura) / 2;
  return areaTriangulo;
}
areaDelTriangulo(3, 5);

function deEuroAdolar(euro) {
  // Supongamos que 1 euro equivale a 1.20 dólares.
  // Debes calcular el valor recibido como argumento pasándolo a dolares.
  // Tu código:
  calculadoraDolares = euro * 1.2;
  return calculadoraDolares;
}
deEuroAdolar(3);

function esVocal(letra) {
  // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
  // Si el usuario ingresa un string de más de un caracter debes retornar el mensaje: "Dato incorrecto".
  // Si no es vocal, tambien debe retornar "Dato incorrecto".
  // Tu código:
  if (letra === 'a') {
    return 'Es vocal';
  } else if (letra === 'e') {
    return 'Es vocal';
  } else if (letra === 'i') {
    return 'Es vocal';
  } else if (letra === 'o') {
    return 'Es vocal';
  } else if (letra === 'u') {
    return 'Es vocal';
  } else if (letra != 'a') {
    return 'Dato incorrecto';
  } else if (letra != 'e') {
    return 'Dato incorrecto';
  } else if (letra != 'i') {
    return 'Dato incorrecto';
  } else if (letra != 'o') {
    return 'Dato incorrecto';
  } else if (letra != 'u') {
    return 'Dato incorrecto';
  }
}
esVocal('tt');
/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
