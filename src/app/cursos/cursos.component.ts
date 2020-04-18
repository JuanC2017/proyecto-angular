import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
	public nombre: string;
	public fallowers: number;
	

  constructor(private _route: ActivatedRoute, private _router: Router,) { 

  }

  ngOnInit() {

  	this._route.params.subscribe( (params: Params) =>{

  		 this.nombre = params.nombre; //recogiendo el valor por la url
  	//	console.log(params);			//recogiendo el valor por la url
  	this.fallowers = +params.fallowers;
  		console.log(this.nombre);

      if (this.nombre == 'ninguno') {
        this._router.navigate( ['/home'] );
      }

  	});

  	/*this._route.params.subscribe((params: Params)=>{
  		this.nombre = params.nombre;
  	});*/

  }

  redirigir(){
    this._router.navigate( ['/zapatillas'] );
  }

}
