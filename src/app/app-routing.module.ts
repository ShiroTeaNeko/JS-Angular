import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageAcceuilComponent } from './page-acceuil/page-acceuil.component';

const routes: Routes = [
  {path : 'accueil', component : PageAcceuilComponent},
  {path : '**', component : PageAcceuilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
