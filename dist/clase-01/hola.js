"use strict";
// USAR EN LA TERMINAL EL COMANDO tsc PARA COMPILAR EL ARCHIVO .ts - Ejemplo : tsc src/hola.ts
// SE DEBE USAR tsc CADA VEZ QUE QUEREMOS COMPILAR NUEVAMENTE LOS ARCHIVOS .ts
var saludo = "Bienvenidos al curso de TypeScript desde cero con Christian Tong Cruz";
console.log(saludo);
var fecha = "15/09/2021";
console.log("la fecha de inicio del curso es el: ", fecha);
var edad = 25;
console.log("Mi edad es de : ", edad, " años");
// tsc --watch Y PASAR EL ENTORNO DONDE SE ENCUENTRA NUESTROS ARCHIVOS, PERMITE COMPILAR AUTOMATICAMENTE TODO ARCHIVO .ts A .js MIENTRAS QUE EL COMANDO ESTÉ CORRIENDO
