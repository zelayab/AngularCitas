import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-crear-citas',
  templateUrl: './crear-citas.component.html',
  styleUrls: ['./crear-citas.component.css']
})
export class CrearCitasComponent implements OnInit {
  nombre = '';
  fecha = '';
  hora = '';
  sintomas = '';

  formularioIncorrecto = false;
  @Output() nuevaCita = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  agregarCita(){
    if(this.nombre == '' ||
     this.fecha == ''||
      this.hora == '' ||
      this.sintomas == ''){
      this.formularioIncorrecto = true;
      return;
    }
    this.formularioIncorrecto = false;

    // creamos objeto para enviarselo al padre
    const cita = {
      nombre: this.nombre,
      fecha: this.fecha,
      hora: this.hora,
      sintomas: this.sintomas
    }
    // pasarle objeto al padre
    this.nuevaCita.emit(cita);
    this.resetCampos();

  }
  //reset
  resetCampos(){
    this.nombre = '',
    this.fecha = '',
    this.hora = '',
    this.sintomas = '';
  }

}
