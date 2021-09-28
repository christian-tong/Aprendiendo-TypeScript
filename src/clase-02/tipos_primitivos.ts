// TIPOS PROMITIVOS O TIPOS BÁSICOS

//  BOOLEAN

let estaConectado = true; // TYPESCRIPT INFIERE EL TIPO DE DATO - estaConectado es de tipo booleano

let nombre: string; // TYPESCRIPT ASIGNA UN TIPO DE DATO

nombre = "Christian";

function tieneDescuento(curso: string): boolean {
  if (curso === "TypeScript") return true;
  return false;
}

console.log(`tieneDescuento("angular"):,`, tieneDescuento("TypeScript"));

// NUMBER

let estudiantes = 100; // estudiantes, SOLO ACEPTA VALORES NUMÉRICOS. FORMA ERRONEA

let cantidadEstudiantes: number; // FORMA CORRECTA DE DEFIRNIR EL TIPO DE DATO

cantidadEstudiantes = 200;

function getCantidadEstudiantes(curso: string): number {
  if (curso === "TypeScript") return 100;
  return 0;
}

let cantidad: number = 1_000_200;

console.log(typeof cantidad);

console.log(cantidad);

// TYPE: NUMBER, HEXADECIMALES

let decimal: number = 10;
console.log("El valor decimal es: ", decimal);

let hexadecimal: number = 0xf00d;
console.log("El valor hexadeciaml es: ", hexadecimal);

// TYPE: NUMBER, BINARIO

let binario: number = 0b1010;
console.log("El valor Binario es: ", binario);

// TYPE: NUMBER, BINARIO

let octal: number = 0o755;
console.log("El valor Octal es: ", octal);

// STRING

let MiNombre = "Christian";
let MiApellido = "Tong Cruz";

let MiNombreCompleto = MiNombre + " " + MiApellido;

console.log("Mi nombre completo es :", MiNombreCompleto);

// STRING + ES6 TEMPLATE LITERALS

let MiNuevoNombreCompleto = `${MiNombre} ${MiApellido}`;

console.log("Mi nombre completo es :", MiNuevoNombreCompleto);

let arregloCursos = ["TypeScript", "Angular"];

let mensaje = `Mi nombre es ${MiNuevoNombreCompleto} y tengo ${arregloCursos.length} cursos. \n Que son: ${arregloCursos} \n Gracias por asistir!`;

console.log("El mensaje es: ", mensaje);

// TIPOS ESPECIALES EN TYPESCRIPT

// TIPO: Any // SE UTILIZA EL TIPO ANY CUANDO NO SE TIENE CONTROL SOBRE EL TIPO DE DATO A TRABAJAR

let desconocido; // Al no establener el tipo de dato a una variable, este infiere a un tipo de dato 'any'

desconocido = "Tipo String";

desconocido = 21110;

let desconocido2: any = 5;

// TIPO: Void // Ejecuta una funcion pero no retorna absolutamente nada

let vacio: void;

function mostrarContenido(curso: string): void {
  const mensaje = curso
    ? `Bienvenido al curso ${curso}`
    : "Suscribete al curso!";
  console.log("mensaje", mensaje);
}

console.log("typescript", mostrarContenido("typescript")); // NO MUESTRA LA SALIDA DE LA FUNCION

mostrarContenido("typescript"); // SI LO CONSIDERAMOS COMO UN PROCEDIMIENTO MUESTRA LA FUNCION

// TIPO: Never // SI SE QUIERE MOSTRAR UN ERROR O UNA EXCEPCION

let nunca: never; // LA FUNCION NUNCA VA A RETORNAR UN VALOR VALIDO // LANZA UN ERROR PERO NUNCA RETORNA UN VALOR

function retornaError(error: string): never {
  throw new Error("Error TypeScript." + error);
}

// retornaError("Valor inesperado");

// TIPO: Null y Undefined

let variableUndefined: undefined = undefined; // SIGNIFICA LA AUSENCIA DE UN VALOR

let variableNull: null = null;

// FUNCIONES EN TYPESCRIPT
// FUNCION CON PARAMETRO OPCIONAL
function NuevoSaludo(nombre?: string): string {
  //SE UTILIZA EL SIGNO DE INTERROGACIÓN EN EL PARÁMETRO DE LA FUNCION PARA HACERLO UN CAMPO OPCIONAL
  if (nombre) return "Hola " + nombre;
  return "Hola usuario!";
}

console.log(NuevoSaludo("Christian"));

console.log(NuevoSaludo());

// ARREGLOS EN TYPESCRIPT
// ASIGNAR EL TIPO DE DATO PARA TODOS LOE ELEMENTOS DENTRO DEL ARREGLO
let NuevoCursos: string[];

NuevoCursos = ["TypeScript", "Angular"];

// ARREGLOS CON GENERICS

let nombres: Array<string>;

nombres = ["Christian", "Mary", "Duke"];

let NuevoArreglo: Array<any>; // CUANDO NO SE ESPECIFICA EL TIPO DE DATOS UNICO DENTRO DEL ARRAY

NuevoArreglo = ["Chris", 2, true];

// TUPLAS // LAS TUPLAS TIENEN UN ORDEN PARA SU CONTENIDO

let infoCursos: [string, number] = ["typescript", 100];

infoCursos = ["Angular", 200];

let cursos: [string, number, string] = ["typescript", 150, "15/03/2020"];

console.log("Cursos : ", cursos);

console.log("Fecha de curso : ", cursos[2]);
