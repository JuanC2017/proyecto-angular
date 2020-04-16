import {Component, OnInit} from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Component({
	selector: 'zapatillas',
	templateUrl: './zapatillas.component.html'
})

export class ZapatillasComponent implements OnInit{

	public titulo: string;
	public titulo2: String;
	public zapatillas: Array<Zapatilla>;
	public marcasTipo: String[];
	public colorComponente: String[];
	public color: string;
	public mi_marca: string;
	
	constructor() {

		this.mi_marca = 'fila';

		this.color = 'black';
		this.marcasTipo = new Array();
		this.colorComponente = new Array();

		this.titulo = 'Componente de Zapatillas';
		this.titulo2 = 'La mejores marcas de zapatos';
		this.zapatillas = [
			new Zapatilla('polo clasic', 'polo assn', 'gray', 60, false),
			new Zapatilla('rebook clasic', 'rebook', 'white', 200, true),
			new Zapatilla('nike running', 'nike', 'black', 400, true),
			new Zapatilla('polo clasic', 'polo assn', 'black', 70, true)


		];


	
		console.log('se ha cargado el componente de zapatillas');
	}

	ngOnInit(){
		console.log(this.zapatillas);
	
		
		
		this.getColor();
	}

	getMarcas(){
		this.zapatillas.forEach((zapatilla, i)=>{

			if (this.marcasTipo.indexOf(zapatilla.marca) < 0) {
				

			this.marcasTipo.push(zapatilla.marca);
			console.log(zapatilla.marca);
			 }
		});
	}

	getColor(){

		this.zapatillas.forEach((zapatilla, i)=>{

			if (this.colorComponente.indexOf(zapatilla.color) < 0) {
				

			this.colorComponente.push(zapatilla.color);
			console.log(zapatilla.color);
			 }
		});

	}

	getMarca(){
		alert(this.mi_marca);
	}

	addMarca(){
		this.marcasTipo.push(this.mi_marca);
	}
		
	

}