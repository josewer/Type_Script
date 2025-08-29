import { Movie } from "./Movie";

export class HorroMovie extends Movie {

   constructor (
      titulo : string ,
      tieneOscar : boolean ,
      duracion : number ,
      private tieneSobresaltos : boolean
   ) {
      super(titulo , tieneOscar , duracion);
   }
}