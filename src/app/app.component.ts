import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'taller15';

  /* act asincrona */
  // VARIABLE DE INTERPOLACION TITULO
titulo = 'Data Binding Interpolacion';

// VARIABLE CON EL CONTENIDO
twoWay = 'El two-way data binding en Angular nos permite modificar el valor de una propiedad de forma bidireccional, de forma que cuando nosotros modificamos el valor de una propiedad en la vista el valor tambien se actualiza en el modelo de datos';

// CREAR UNEVENT BINDING PARA OCULTAR / MOSTRAR CONTENIDO DEL SECTION
  mostrar = true;
  valor = "Ocultar"
  Generar(){
    if(this.mostrar){
    this.valor = "Mostrar";
    this.mostrar = false;
    }else{
    this.valor = "Ocultar";
    this.mostrar = true;
    }
  }


  Print(){
    console.log(this.twoWay)
  }

}
