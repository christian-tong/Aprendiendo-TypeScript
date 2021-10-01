// ITERFACES EN TYPESCRIPT

interface ICurso {
  nombre: string;
  identificador: number;
}

let cursoTypeScript: ICurso = {
  nombre: "TypeScript",
  identificador: 1,
};

cursoTypeScript = {
  nombre: "TypeScript",
  identificador: 2,
};

let curso2: ICurso;

curso2 = {
  nombre: "JavaScript",
  identificador: 20,
};
curso2 = {
  nombre: "Angular",
  identificador: 30,
};

console.log("cursoTypeScript", cursoTypeScript);

console.log("curso2", curso2);


// EXTENDIENDO INTERFACES | HERENCIA DE INTERFACES

interface CursoEdteam extends ICurso {
  costo: number;
}

const primerCurso: CursoEdteam = {
  nombre: "TypeScript desde Cero",
  identificador: 100,
  costo: 100,
};

console.log("El primer curso es: ", primerCurso);
