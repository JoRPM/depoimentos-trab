import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { FormComponent } from './form/form.component';
import { DepoimentoComponent } from './depoimento/depoimento.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "contato", component: ContatoComponent},
  {path: "form", component: FormComponent},
  {path: "depoimento", component: DepoimentoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
