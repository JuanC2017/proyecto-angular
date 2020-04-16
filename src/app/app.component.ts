import { Component } from '@angular/core';
import { Configuracion } from './models/configuracion';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'proyecto-angular';
  public descripcion: string;
  public mostrar_videojuegos:boolean = true;

  constructor(){
  	this.title = Configuracion.titulo;
  	this.descripcion = Configuracion.descripcion;
  }

  ocultarVideojuegos(value){
  	this.mostrar_videojuegos=value;
  }

  
}
