import { it } from "node:test";
import { IAnimal } from "./interfaces/IAnimal";
import { Persona } from "./interfaces/Persona";
import { Cerdo } from "./model/Cerdo";
import { HorroMovie } from "./model/HorroMovie";
import { Movie } from "./model/Movie";
import { Pinguino } from "./model/Pinguino";
import { IUser } from "./interfaces/IUser";

console.log("Hola a todos!")

let movie: any = "Jose";
console.log(movie)

let n: Number = 9;
let s: String = "hola";
let array: Number[] = [1, 2, 3, 4, 5]
let arrayString: String[] = ["f", "d"]

type movieType<T> = {
   title: String,
   duration: number,
   hasOscars: boolean
}

const movie_1: movieType<number> = {
   title: "El señor de los anillos",
   duration: 200,
   hasOscars: true
}

type state = "Error" | "Loading";
let currentState: state = "Loading"


function sayHello(): void {
   console.log("Hola")
}

const h1 = document.querySelector("h1");
console.log(h1?.textContent);

const title: HTMLHeadingElement | null = document.querySelector(".title");
console.log(title?.textContent);

const userName: HTMLInputElement | null = document.querySelector("#userName");
console.log(userName?.placeholder);

// genericos
function getFirtsElement<T>(array: T[]) {
   return array[0];
}

console.log(getFirtsElement<number>([1, 2, 3, 4]));
console.log(getFirtsElement([4, 2, 3, 4]));
console.log(getFirtsElement<string>(["a", "b", "c"]));

// clases
const movie_3 = new Movie("Harry potter", true, 400);
console.log(movie_3)

// Herencia
const peliculaHorror = new HorroMovie("Payaso", true, 200, false);
const peliculas: Movie[] = [peliculaHorror, movie_3]

console.log(peliculas[0].id);

// interfaces
const persona: Persona<number, string> = {
   nombre: "jose",
   edad: 32,
   otrosDatos: 2113,
   masDatos: "Mas datos"
}


const animales: IAnimal[] = [new Cerdo(4), new Pinguino(2)];

for (let animal of animales) {
   animal.sonido();
}

namespace Common {
   export interface User {
      id: string,
      userName: string
   }

   export interface Address {
      id: string,
      streat: string
   }
}

const user: Common.User = {
   id: "wewe",
   userName: "Juan"
}


const button = document.querySelector<HTMLButtonElement>("#btCargarPeliculas");
const ul = document.querySelector<HTMLUListElement>("#lista-peliculas");

console.log(button == null)

const movies: Movie[] = [
   new Movie("harry potter", false, 200),
   new Movie("Señor de los anillos", true, 220),
   new Movie("Hercules", false, 142),
   new Movie("Aladin", true, 120)
];

const cargarPeliculas = () => {
   movies.forEach((item) => {

      const li = document.createElement("li");
      li.classList.add("elemento");

      const h3 = document.createElement("h3");
      const p = document.createElement("p");

      const check = document.createElement("input");
      check.type = "checkbox"
 
      h3.textContent = item.titulo;
      p.textContent = `${item.duracion} minutos.`
      check.checked = item.tieneOscar;

      li.append(h3, p, check);
      ul?.append(li);
   });
}

button?.addEventListener("click", () => {

   if (!ul) return; // early return si no existe ul

   if (ul.childElementCount === 0) {
      cargarPeliculas();
      button.textContent = "Ocultar peliculas"
   } else {
      ul.innerHTML = ""
      button.textContent = "Mostrar peliculas"
   }
});

const btLogin = document.querySelector<HTMLButtonElement>("#btLogin");
const pLogin = document.querySelector("#login") as HTMLParagraphElement;

const login = async () => {
   const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
   const user : IUser = await response.json();
   return user;
}

btLogin?.addEventListener("click" , async () => {
   const user = await login();
   console.log(user.email)
   pLogin.textContent = user.email;
})