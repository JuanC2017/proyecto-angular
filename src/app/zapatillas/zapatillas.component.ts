import {Component, OnInit} from '@angular/core';
import { Zapatilla } from '../models/zapatilla';
import { ZapatillaService } from '../services/zapatilla.service';

@Component({
	selector: 'zapatillas',
	templateUrl: './zapatillas.component.html',
	providers: [ ZapatillaService ]
})

export class ZapatillasComponent implements OnInit{

	public titulo: string;
	public titulo2: String;
	public zapatillas: Array<Zapatilla>;
	public marcasTipo: String[];
	public colorComponente: String[];
	public color: string;
	public mi_marca: string;
	
	
	constructor(private _zapatillaService: ZapatillaService) {

		this.mi_marca = 'fila';

		this.color = 'black';
		this.marcasTipo = new Array();
		this.colorComponente = new Array();

		this.titulo = 'Componente de Zapatillas';
		this.titulo2 = 'La mejores marcas de zapatos';
		


	
		console.log('se ha cargado el componente de zapatillas');
	}

	ngOnInit(){

		this.zapatillas = this._zapatillaService.getZapatilla();
		alert( this._zapatillaService.getTexto());
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

	borrarMarca(){
		this.marcasTipo.pop();
	}

	borrarMarcas(index){
		this.marcasTipo.splice(index, 1);
	}

	onBlur(){
		console.log('has salido del input')
	}

	mostrarPalabra(){
		alert(this.color);
	}
		
	

}