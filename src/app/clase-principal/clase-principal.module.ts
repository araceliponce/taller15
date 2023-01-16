import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterpolacionComponent } from './interpolacion/interpolacion.component';
import { EventoComponent } from './evento/evento.component';
import { TwowayComponent } from './twoway/twoway.component';
import { FormsModule } from '@angular/forms';


//importamos formsmodule para usar [(ngModel)]="..." que es una transferencia de datos de html a ts y de ts a html

@NgModule({
  declarations: [
    InterpolacionComponent,
    EventoComponent,
    TwowayComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    InterpolacionComponent,
    EventoComponent,
    TwowayComponent
  ]
})
export class ClasePrincipalModule { }
