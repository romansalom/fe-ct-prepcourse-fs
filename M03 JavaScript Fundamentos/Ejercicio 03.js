/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(x, y) {
  if (x === y) {
    // Retorna true si "x" e "y" son iguales.
    // De lo contrario, retorna false.
    // Tu código:
    console.log(true);
  } else if (x != y) {
    console.log(false);
  }
}
sonIguales((x = 1), (y = 1));
sonIguales((x = 2), (y = 1));

function tienenMismaLongitud(str1, str2) {
  // Retorna true si los dos strings tienen la misma longitud.
  // De lo contrario, retorna false.
  // Tu código:
  if (str1.length === str2.length) {
    console.log(true);
  } else if (str1.length != str2.length) {
    console.log(false);
  }
}
tienenMismaLongitud((str1 = 'hola'), (str2 = 'hola'));
tienenMismaLongitud((str1 = 'la'), (str2 = 'hola'));

function menosQueNoventa(num) {
  // Retorna true si el argumento "num" es menor que noventa.
  // De lo contrario, retorna false.
  // Tu código:
  if (num < 90) {
    console.log(true);
  } else {
    console.log(false);
  }
}
menosQueNoventa(4125);
menosQueNoventa(12);

function mayorQueCincuenta(num) {
  // Retorna true si el argumento "num" es mayor que cincuenta.
  // De lo contrario, retorna false.
  // Tu código:
  if (num > 50) {
    console.log(true);
  } else {
    console.log(false);
  }
}
mayorQueCincuenta(23);
mayorQueCincuenta(55);

function esPar(num) {
  // Retorna true si "num" es par.
  // De lo contrario, retorna false.
  // Tu código:
  if (num % 2 == 0) {
    console.log(true);
  } else if (num % 2 > 0) {
    console.log(false);
  }
}
esPar(30);
esPar(31);

function esImpar(num) {
  // Retorna true si "num" es impar.
  // De lo contrario, retorna false.
  // Tu código:
  if (num % 2 > 0) {
    console.log(true);
  } else if (num % 2 == 0) {
    console.log(false);
  }
}
esImpar(5);
esImpar(2);

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  esPar,
  esImpar,
};
