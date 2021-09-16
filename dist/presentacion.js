"use strict";
var curso = ["TypeScript desde cero", "Angular proximamente"];
console.log("cursos ", curso);
var inscritos = 30;
// FUNCION SIN OPTIMIZAR
function suma(a, b) {
    return a + b;
}
// FUNCION OPTIMIZADA
var resta = function (a, b) {
    return a - b;
};
var resultado = resta(10, 5);
console.log(resultado);
console.log("El resultado de la resta de 10-5 es de: " + resultado);
