import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {



  // Crear el array (aqui se almacena la informacion)
AAAdatos = new Array;
// Los datos para el Array
nom = "";
ape = "";
car = "";
// Metodo para añadir valores al array
Agregar(){
if(this.nom!=''){
this.AAAdatos.push({'Nombre': this.nom, 'Apellido': this.ape, 'Carrera': this.car});
this.nom = "";
/* if (this.nom === undefined)
      this.nom= "<undefined>";
    if (this.nom === null)
      this.nom= "<null>";
    if (this.nom.length === 0)
      this.nom= "<empty string>";
 */

this.ape = "";
this.car = "";
console.log(this.AAAdatos);
}else{
console.log("Debe ingresar nombre");
}
}

Eliminar(indice:number){


if(confirm('¿Seguro que quieres eliminarlo?')){
  this.datos.splice(indice, 1)
}else{
  return
}
console.log(this.datos)
}



/* DE EDILT */
constructor() { }

ngOnInit(): void {}

// datos: Array<any> = [];
datos = [];
estudiante: any[] = [];
nombre: string = "";
apellido: string = "";
carrera: string = "";
model: any;

insertarDatos() {
let estudiante = {
nombre: this.nombre,
apellidos: this.apellido,
carrera: this.carrera
};

this.estudiante.push(estudiante);

this.nombre = "";
this.apellido = "";
this.carrera = "";
}

eliminarEstudiante(index: number) {
if (confirm("Estás seguro de que deseas eliminar?")) {
this.estudiante.splice(index, 1);
let alertSection = document.createElement("section");
alertSection.innerHTML = "Estudiante eliminado";
alertSection.style.fontSize = "25px";
alertSection.style.color = "blue";
let alertContainer = document.querySelector("#alert-container");
if(alertContainer){
alertContainer.appendChild(alertSection);
}
setTimeout(() => {
alertSection.remove();
},3500);
}}

}
