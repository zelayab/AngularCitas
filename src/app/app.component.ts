import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listCitas: any[]= [];
  title = 'citas';

  agregarCita(cita:any){
    this.listCitas.push(cita);
  }

  elimintarCitaListado(index: number){
    this.listCitas.splice(index, 1);
  }
}
