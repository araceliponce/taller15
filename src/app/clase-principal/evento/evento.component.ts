import { Component } from '@angular/core';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent {


  //cambias loas valores de ts mediante el html


  resultado: number=0;
  valor=0;

  //asi como resultado es atributo. incrementar () es un metodo
  Incrementar(){
    this.valor = this.resultado++;
    console.log(this.valor);

    return(this.valor)
  }



  mensaje: string = '';
  Generar(event:any){
    this.mensaje = event.target.value
  }
}
