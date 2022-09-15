import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompartirComponent } from './page/compartir/compartir.component';
import { ContactoComponent } from './page/contacto/contacto.component';
import { HomeComponent } from './page/home/home.component';
import { SetComponent } from './page/set/set.component';
import { TobillerasComponent } from './page/tobilleras/tobilleras.component';
import { UnidadComponent } from './page/unidad/unidad.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path:'', component: HomeComponent},
  {path:'contacto', component: ContactoComponent},
  {path:'compartir', component: CompartirComponent},
  {path:'unidad', component: UnidadComponent},
  {path:'set', component: SetComponent},
  {path:'tobilleras', component: TobillerasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {} 