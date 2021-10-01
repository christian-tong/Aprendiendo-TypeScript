export {}; // MODULO EN TS

// ALIAS PARA TIPOS DE DATOS EN TS

let curso: string = "TypeScript";

// CURSOS CODIGO: JAVASCRIPT = 1, TYPESCRIPT = 2

// curso = 1; // JavaScript

let cursoNuevo: string | number; // ASIGNAMOS 2 TIPOS DE DATOS

cursoNuevo = "JavaScript";

cursoNuevo = 2; // TypeScript

function getCurso(): CursoType {
  // return 'JavaScript'
  return 1;
}

// SE PUEDE DECLARAR VARIOS TIPOS DE DATOS EN UNO SOLO

type CursoType = string | number | boolean;

// ARREGLOS

let cursos: string[] = ["JavaScript", "TypeScript"];
let cursos2: CursoType[] = ["JavaScript", "TypeScript", 1, true];

console.log("Cursos", cursos);
console.log("Cursos2", cursos2);

// ASERCIONES DE TIPO EN TYPESCRIPT | Type Assertions

let codigoCurso: any;

codigoCurso = 100;

let numeroCurso: number = <number>codigoCurso; // ASERCION ES CONVERTIR UN TIPO DE DATO A OTRO

console.log("numeroCurso", numeroCurso);

let estudiante;

type Estudiante = { nombre: string; curso: string }; // DEFINIR UN TIPO QUE SE PUEDA RE-UTILIZAR
estudiante = <Estudiante>{};
estudiante.nombre = "Mary";
estudiante.curso = "Angular";

console.log("Estudiante", estudiante);

// ENUMERADOS EN TYPESCRIPT

enum Curso2 {
  JavaScript,
  TypeScript,
  Angular,
}

let curso1: Curso2 = Curso2.Angular;

console.log("curso", curso1);
console.log("curso", Curso2[curso1]);

enum Dia {
  Lunes, //0
  Martes, //1
  Miercoles, //2
  Jueves, //3
  Viernes, //4
}

console.log("El día de la semana es", Dia.Viernes);

enum FinSemana {
  Sabado = 5,
  Domingo,
}

console.log("El día de fin de semana es", FinSemana.Sabado);
console.log("El día de fin de semana es", FinSemana.Domingo);

// CONTROL SOBRE LOS VALORES PARA ENUMERADOS

enum MES {
  Enero = "Ene",
  Febrero = "Feb",
  Marzo = "Mar",
  Abril = "Abr",
}
console.log("El mes es :", MES.Abril);
