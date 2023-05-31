/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*4️⃣ EJERCICIO 04 4️⃣*/

// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCuadrado(num) {
  // Retorna el valor de "num" elevado al cuadrado.
  // Tu código:
  resultado = Math.pow(num, 2);
  console.log(resultado);
}
elevarAlCuadrado(5);

function elevarAlCubo(num) {
  // Retorna el valor de "num" elevado al cubo.
  // Tu código:
  resultadoCubo = Math.pow(num, 3);
  console.log(resultadoCubo);
}
elevarAlCubo(5);

function elevar(num, exponent) {
  // Retorna el valor de "num" elevado al exponente "exponent".
  // Tu código:
  resultadoElevar = Math.pow(num, exponent);
  console.log(resultadoElevar);
}
elevar(2, 4);

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y retórnalo.
  // Tu código:
  redondeoNumeroCercano = Math.round(num);
  console.log(redondeoNumeroCercano);
}
redondearNumero(2.45);

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba y retórnalo.
  // Tu código:
  redondeoNumeroGrande = Math.ceil(num);
  console.log(redondeoNumeroGrande);
}
redondearHaciaArriba(3.27);

function numeroRandom(num) {
  // Genera un número al azar entre 0 y 1 y retórnalo.
  // Tu código:

  numeroRandom = Math.random(num);
  console.log(numeroRandom);
}
numeroRandom();

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
};
