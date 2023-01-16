import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  templateUrl: './interpolacion.component.html',
  styleUrls: ['./interpolacion.component.css']
})
export class InterpolacionComponent {



  // direccion y datos son ATRIBUTOS
  //envamos del ts al html

  direccion = 'su casa'
  datos={
    nombre: 'paco',
    apellido: 'perez'
  }

  Producto( num1:number, num2:number){
    return num1 * num2
  }
}
