import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
	selector: 'videojuego',
	templateUrl: './videojuego.component.html'
})

export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy{
	public titulo: string;
	public listado: string;


	constructor(){
		this.titulo = 'Componente de VideoJuego';
		this.listado = 'Lista de video juegos populares';

		console.log('se ha cargado el componente de video juego');
	}

	ngOnInit(){
		console.log('OnInit ejecutado');
	}

	ngDoCheck(){
		console.log('DoCheck ejecutado');
	}

	ngOnDestroy(){
		console.log('OnDestroy ejecutado');
	}


}