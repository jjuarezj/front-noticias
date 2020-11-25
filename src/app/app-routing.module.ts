import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AltaNoticiasComponent } from './noticias/alta-noticias/alta-noticias.component';
import { NoticiasComponent } from './noticias/noticias.component';

const routes: Routes = [

  { path: 'noticias', component: NoticiasComponent, pathMatch: 'full' },
  { path: 'altaNoticias', component: AltaNoticiasComponent, pathMatch: 'full' },
  {
    path: '',
    redirectTo: 'noticias',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
