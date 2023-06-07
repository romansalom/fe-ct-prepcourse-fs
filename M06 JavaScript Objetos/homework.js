/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

const { numeroMasGrande } = require('../M05 JavaScript Arrays/homework');

function crearGato(nombre, edad) {
  // Debes crear un nuevo objeto con las propiedades "nombre" y "edad".
  // Ambas propiedades deben tener el valor correspondiente recibido por parámetro.
  // Además, agregar una propiedad con el nombre "meow".
  // La propiedad "meow" será una función que retorne el string: "Meow!".
  // Retornar el objeto.
  // Tu código:
  nuevoObjeto = {
    nombre,
    edad,
    meow: function () {
      return 'Meow!';
    },
  };
  nuevoObjeto.nombre = nombre;
  nuevoObjeto.edad = edad;
  return nuevoObjeto;
}
crearGato('jorge ', 12);
nuevoObjeto.meow();

function nuevoUsuario(nombre, email, password) {
  // Debes crear un nuevo objeto.
  // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
  // Retornar el objeto.
  // Tu código:
  usuario = {
    nombre: nombre,
    email: email,
    password: password,
  };
  return usuario;
}
nuevoUsuario('roberto', 'robert@gmail.com', 'holamundo323');

function agregarPropiedad(objeto, propiedad) {
  // Recibirás un objeto por parámetro.
  // Debes agregarle una propiedad con el nombre recibido por parámetro.
  // Esta propiedad será igual al valor `null`.
  // Retornar el objeto.
  // Tu código:
  objeto[propiedad] = null;
  return objeto;
}

function invocarMetodo(objeto, metodo) {
  // El parámetro "metodo" es un string que coincide con el nombre de una propiedad del objeto recibido.
  // Esta propiedad contiene una función en su interior. Debes invocarla/ejecutarla.
  // [NOTA]: no necesitar retornar nada.
  // Tu código:
  objeto[metodo](); //En el código, se utiliza la notación de corchetes ([]) para acceder a la propiedad del objeto que coincide con el valor de metodo. Luego, se agrega () para invocar o ejecutar la función que se encuentra dentro de esa propiedad.
}

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
  // El parámetro "objetoMisterioso" posee una propiedad con el nombre "numeroMisterioso".
  // Debes multiplicar este número por 5 y retornar el resultado.
  numeromisterio = objetoMisterioso.numeroMisterioso;
  resultado = numeromisterio * 5;

  return resultado;

  // Tu código:
}

function eliminarPropiedad(objeto, propiedad) {
  // El parámetro "propiedad" es una propiedad del objeto que recibes.
  // Debes eliminarla del objeto y retornarlo finalmente.
  // Tu código:
  delete objeto[propiedad];
  return objeto;
}

function tieneEmail(objetoUsuario) {
  return objetoUsuario.hasOwnProperty('email') && objetoUsuario.email != null;
}

function tienePropiedad(objeto, propiedad) {
  // Verifica si el objeto recibido posee una propiedad con el mismo nombre que el parámetro "propiedad".
  // En ese caso retornar true. Caso contrario, false.
  // Tu código:
  tienepropiedad2 = objeto.hasOwnProperty(propiedad);
  return tienepropiedad2;
}

function verificarPassword(objetoUsuario, password) {
  // Verifica si la propiedad "password" del "objetoUsuario" coincide con el parámetro "password".
  // En ese caso retornar true. Caso contrario, false.
  // Tu código:
  contraCorrecta =
    objetoUsuario.hasOwnProperty('password') &&
    objetoUsuario.password === password;
  return contraCorrecta;
}

function actualizarPassword(objetoUsuario, nuevaPassword) {
  // Reemplaza la contrseña guardada en la propiedad "password" del "objetoUsuario".
  // La nueva contraseña la recibes por parámetro.
  // Retornar el objeto.
  // Tu código:
  objetoUsuario.password = nuevaPassword;

  return objetoUsuario;
}
actualizarPassword('holamundillo');

function agregarAmigo(objetoUsuario, nuevoAmigo) {
  // El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
  // Debes agregar el "nuevoAmigo" al final de este arreglo.
  // Retornar el objeto.
  // Tu código:
  objetoUsuario.amigos.push(nuevoAmigo);
  return objetoUsuario;
}

function pasarUsuarioAPremium(objetoMuchosUsuarios) {
  // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
  // Cada usuario tiene una propiedad llamada "esPremium".
  // Define esta propiedad de todos los usuarios como true.
  // Retornar el arreglo.
  // Tu código:

  // Recorre cada usuario en el arreglo objetoMuchosUsuarios
  for (var i = 0; i < objetoMuchosUsuarios.length; i++) {
    // Asigna el valor true a la propiedad "esPremium" de cada usuario
    objetoMuchosUsuarios[i].esPremium = true;
  }

  // Retorna el arreglo objetoMuchosUsuarios actualizado
  return objetoMuchosUsuarios;
}

function sumarLikesDeUsuario(objetoUsuario) {
  // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
  // Este arreglo contiene objetos (post).
  // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
  // Debes sumar los likes de todos los post y retornar el resultado.
  // Tu código:
  var sumar = 0;
  for (var i = 0; i < objetoUsuario.posts.length; i++) {
    sumar += objetoUsuario.posts[i].likes;
  }
  return sumar;
}

function agregarMetodoCalculoDescuento(objetoProducto) {
  objetoProducto['calcularPrecioDescuento'] = function () {
    this.precio = this.precio - this.precio * this.porcentajeDeDescuento;
    return this.precio;
  };
  return objetoProducto;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  crearGato,
  nuevoUsuario,
  agregarPropiedad,
  invocarMetodo,
  multiplicarNumeroDesconocidoPorCinco,
  eliminarPropiedad,
  tieneEmail,
  tienePropiedad,
  verificarPassword,
  actualizarPassword,
  agregarAmigo,
  pasarUsuarioAPremium,
  sumarLikesDeUsuario,
  agregarMetodoCalculoDescuento,
};
