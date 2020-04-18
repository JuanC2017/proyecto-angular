import { Injectable } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Injectable()
export class ZapatillaService{

	public zapatillas: Array<Zapatilla>;

	constructor(){
		this.zapatillas = [
			new Zapatilla('polo clasic', 'polo assn', 'gray', 60, false),
			new Zapatilla('rebook clasic', 'rebook', 'white', 200, true),
			new Zapatilla('nike running', 'nike', 'black', 400, true),
			new Zapatilla('polo clasic', 'polo assn', 'black', 70, true)


		];
	}

	getTexto(){
		return 'Hola mundo desde un servicio';
	}


	getZapatilla(): Array<Zapatilla>{

		return this.zapatillas;

	}

}