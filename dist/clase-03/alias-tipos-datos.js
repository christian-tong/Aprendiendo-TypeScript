"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ALIAS PARA TIPOS DE DATOS EN TS
var curso = "TypeScript";
// CURSOS CODIGO: JAVASCRIPT = 1, TYPESCRIPT = 2
// curso = 1; // JavaScript
var cursoNuevo; // ASIGNAMOS 2 TIPOS DE DATOS
cursoNuevo = "JavaScript";
cursoNuevo = 2; // TypeScript
function getCurso() {
    // return 'JavaScript'
    return 1;
}
// ARREGLOS
var cursos = ["JavaScript", "TypeScript"];
var cursos2 = ["JavaScript", "TypeScript", 1, true];
console.log("Cursos", cursos);
console.log("Cursos2", cursos2);
// ASERCIONES DE TIPO EN TYPESCRIPT | Type Assertions
var codigoCurso;
codigoCurso = 100;
var numeroCurso = codigoCurso; // ASERCION ES CONVERTIR UN TIPO DE DATO A OTRO
console.log("numeroCurso", numeroCurso);
var estudiante;
estudiante = {};
estudiante.nombre = "Mary";
estudiante.curso = "Angular";
console.log("Estudiante", estudiante);
// ENUMERADOS EN TYPESCRIPT
var Curso2;
(function (Curso2) {
    Curso2[Curso2["JavaScript"] = 0] = "JavaScript";
    Curso2[Curso2["TypeScript"] = 1] = "TypeScript";
    Curso2[Curso2["Angular"] = 2] = "Angular";
})(Curso2 || (Curso2 = {}));
var curso1 = Curso2.Angular;
console.log("curso", curso1);
console.log("curso", Curso2[curso1]);
var Dia;
(function (Dia) {
    Dia[Dia["Lunes"] = 0] = "Lunes";
    Dia[Dia["Martes"] = 1] = "Martes";
    Dia[Dia["Miercoles"] = 2] = "Miercoles";
    Dia[Dia["Jueves"] = 3] = "Jueves";
    Dia[Dia["Viernes"] = 4] = "Viernes";
})(Dia || (Dia = {}));
console.log("El día de la semana es", Dia.Viernes);
var FinSemana;
(function (FinSemana) {
    FinSemana[FinSemana["Sabado"] = 5] = "Sabado";
    FinSemana[FinSemana["Domingo"] = 6] = "Domingo";
})(FinSemana || (FinSemana = {}));
console.log("El día de fin de semana es", FinSemana.Sabado);
console.log("El día de fin de semana es", FinSemana.Domingo);
// CONTROL SOBRE LOS VALORES PARA ENUMERADOS
var MES;
(function (MES) {
    MES["Enero"] = "Ene";
    MES["Febrero"] = "Feb";
    MES["Marzo"] = "Mar";
    MES["Abril"] = "Abr";
})(MES || (MES = {}));
console.log("El mes es :", MES.Abril);
