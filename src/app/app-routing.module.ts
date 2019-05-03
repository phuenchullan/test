import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EstudiantesComponent } from './components/estudiantes/estudiantes.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'estudiantes', component: EstudiantesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
