let objeto = {nombre: "Maria", apellido:"Fontalba", edad: 37};
let jsonString = JSON.stringify(objeto);

let texto = "Mi objeto persona es el siguiente";
let objetoPersona = texto + jsonString;

console.log(objetoPersona)