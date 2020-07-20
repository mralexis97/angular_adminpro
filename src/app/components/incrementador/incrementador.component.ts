import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress: ElementRef;

  @Input('nombre') leyenda: string = 'Leyenda';
  @Input() progreso: number = 50;

  @Output('actualizaValor') cambioValor: EventEmitter<number> = new EventEmitter(); // sintaxis para emitir un numero como un evento

  constructor() {
    //console.log('Leyenda', this.leyenda);
    //console.log('Progreso', this.progreso);
  }

  ngOnInit(): void {
    //console.log('Leyenda', this.leyenda);
    //console.log('Progreso', this.progreso);
  }

  onChanges( newValue: number){


    console.log( newValue );

    if ( newValue >= 100)
    {
      this.progreso = 100;
    }else if ( newValue <= 0 ){
      this.progreso = 0;
    }

  //  elemHTML.value = this.progreso;
    this.txtProgress.nativeElement.value = this.progreso;

    this.cambioValor.emit(this.progreso);
  }

  //metodos
  cambiarValor( valor ){

    if (this.progreso >= 100 && valor > 0)
    {
      this.progreso = 100;
      return;
    }
    if (this.progreso <= 0 && valor < 0)
    {
      this.progreso = 0;
      return;
    }
    this.progreso = this.progreso + valor;

    this.cambioValor.emit(this.progreso);
    this.txtProgress.nativeElement.focus();
  }

}
