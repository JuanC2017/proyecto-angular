import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';


//Importando los componentes
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { ExternoComponent } from './externo/externo.component';

const routes: Routes = [

	{path: '', component: HomeComponent},
	{path: 'home', component: HomeComponent},
	{path: 'zapatillas', component: ZapatillasComponent},
	{path: 'videojuego', component: VideojuegoComponent},
	{path: 'cursos', component: CursosComponent},
	{path: 'cursos/:nombre', component: CursosComponent},
	{path: 'cursos/:nombre/:fallowers', component: CursosComponent},
	{path: 'externo', component: ExternoComponent},
	{path: '**', component: HomeComponent}


];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders  = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})




export class AppRoutingModule { }
