export class Movie {

   public titulo : string;
   public tieneOscar : boolean;
   public duracion : number;
   readonly id : string;

   constructor ( titulo : string , tieneOscar : boolean , duracion : number ) {
      this.id = crypto.randomUUID();
      this.titulo = titulo;
      this.tieneOscar = tieneOscar;
      this.duracion = duracion;
   }

   getTitulo() : string {
      return this.titulo;
   }
}