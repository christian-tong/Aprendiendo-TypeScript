let curso = ["TypeScript desde cero", "Angular proximamente"];
console.log("cursos ", curso);

const inscritos = 30;

// FUNCION SIN OPTIMIZAR
function suma(a: number, b: number) {
  return a + b;
}

// FUNCION OPTIMIZADA

const resta = (a: number, b: number) => {
  return a - b;
};
const resultado = resta(10, 5);

console.log(resultado);

console.log(`El resultado de la resta de 10-5 es de: ${resultado}`);
