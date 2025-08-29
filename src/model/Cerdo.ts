import { IAnimal } from "../interfaces/IAnimal";

export class Cerdo implements IAnimal {

   constructor(
      public numPatas : number
   ) {}

   sonido(): void {
      console.log("oinss")
   }

   getNumPatas () : number {
      return this.numPatas;
   }
}