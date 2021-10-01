"use strict";
// TIPOS PROMITIVOS O TIPOS BÁSICOS
//  BOOLEAN
var estaConectado = true; // TYPESCRIPT INFIERE EL TIPO DE DATO - estaConectado es de tipo booleano
var nombre; // TYPESCRIPT ASIGNA UN TIPO DE DATO
nombre = "Christian";
function tieneDescuento(curso) {
    if (curso === "TypeScript")
        return true;
    return false;
}
console.log("tieneDescuento(\"angular\"):,", tieneDescuento("TypeScript"));
// NUMBER
var estudiantes = 100; // estudiantes, SOLO ACEPTA VALORES NUMÉRICOS. FORMA ERRONEA
var cantidadEstudiantes; // FORMA CORRECTA DE DEFIRNIR EL TIPO DE DATO
cantidadEstudiantes = 200;
function getCantidadEstudiantes(curso) {
    if (curso === "TypeScript")
        return 100;
    return 0;
}
var cantidad = 1000200;
console.log(typeof cantidad);
console.log(cantidad);
// TYPE: NUMBER, HEXADECIMALES
var decimal = 10;
console.log("El valor decimal es: ", decimal);
var hexadecimal = 0xf00d;
console.log("El valor hexadeciaml es: ", hexadecimal);
// TYPE: NUMBER, BINARIO
var binario = 10;
console.log("El valor Binario es: ", binario);
// TYPE: NUMBER, BINARIO
var octal = 493;
console.log("El valor Octal es: ", octal);
// STRING
var MiNombre = "Christian";
var MiApellido = "Tong Cruz";
var MiNombreCompleto = MiNombre + " " + MiApellido;
console.log("Mi nombre completo es :", MiNombreCompleto);
// STRING + ES6 TEMPLATE LITERALS
var MiNuevoNombreCompleto = MiNombre + " " + MiApellido;
console.log("Mi nombre completo es :", MiNuevoNombreCompleto);
var arregloCursos = ["TypeScript", "Angular"];
var mensaje = "Mi nombre es " + MiNuevoNombreCompleto + " y tengo " + arregloCursos.length + " cursos. \n Que son: " + arregloCursos + " \n Gracias por asistir!";
console.log("El mensaje es: ", mensaje);
// TIPOS ESPECIALES EN TYPESCRIPT
// TIPO: Any // SE UTILIZA EL TIPO ANY CUANDO NO SE TIENE CONTROL SOBRE EL TIPO DE DATO A TRABAJAR
var desconocido; // Al no establener el tipo de dato a una variable, este infiere a un tipo de dato 'any'
desconocido = "Tipo String";
desconocido = 21110;
var desconocido2 = 5;
// TIPO: Void // Ejecuta una funcion pero no retorna absolutamente nada
var vacio;
function mostrarContenido(curso) {
    var mensaje = curso
        ? "Bienvenido al curso " + curso
        : "Suscribete al curso!";
    console.log("mensaje", mensaje);
}
console.log("typescript", mostrarContenido("typescript")); // NO MUESTRA LA SALIDA DE LA FUNCION
mostrarContenido("typescript"); // SI LO CONSIDERAMOS COMO UN PROCEDIMIENTO MUESTRA LA FUNCION
// TIPO: Never // SI SE QUIERE MOSTRAR UN ERROR O UNA EXCEPCION
var nunca; // LA FUNCION NUNCA VA A RETORNAR UN VALOR VALIDO // LANZA UN ERROR PERO NUNCA RETORNA UN VALOR
function retornaError(error) {
    throw new Error("Error TypeScript." + error);
}
// retornaError("Valor inesperado");
// TIPO: Null y Undefined
var variableUndefined = undefined; // SIGNIFICA LA AUSENCIA DE UN VALOR
var variableNull = null;
// FUNCIONES EN TYPESCRIPT
// FUNCION CON PARAMETRO OPCIONAL
function NuevoSaludo(nombre) {
    //SE UTILIZA EL SIGNO DE INTERROGACIÓN EN EL PARÁMETRO DE LA FUNCION PARA HACERLO UN CAMPO OPCIONAL
    if (nombre)
        return "Hola " + nombre;
    return "Hola usuario!";
}
console.log(NuevoSaludo("Christian"));
console.log(NuevoSaludo());
// ARREGLOS EN TYPESCRIPT
// ASIGNAR EL TIPO DE DATO PARA TODOS LOE ELEMENTOS DENTRO DEL ARREGLO
var NuevoCursos;
NuevoCursos = ["TypeScript", "Angular"];
// ARREGLOS CON GENERICS
var nombres;
nombres = ["Christian", "Mary", "Duke"];
var NuevoArreglo; // CUANDO NO SE ESPECIFICA EL TIPO DE DATOS UNICO DENTRO DEL ARRAY
NuevoArreglo = ["Chris", 2, true];
// TUPLAS // LAS TUPLAS TIENEN UN ORDEN PARA SU CONTENIDO
var infoCursos = ["typescript", 100];
infoCursos = ["Angular", 200];
var cursos = ["typescript", 150, "15/03/2020"];
console.log("Cursos : ", cursos);
console.log("Fecha de curso : ", cursos[2]);
