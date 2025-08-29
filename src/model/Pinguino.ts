import { IAnimal } from "../interfaces/IAnimal";

export class Pinguino implements IAnimal {

   constructor(
      public numPatas : number
   ) {}

   sonido(): void {
      console.log("oinss")
   }
}