import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Welcome } from './home/welcome/welcome';
// Importa tus otros componentes aquí

const routes: Routes = [
  { path: 'home', component: Welcome },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // Deja las otras rutas comentadas hasta que crees los componentes
  // { path: 'usuarios', component: UserListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Usa forRoot para el principal
  exports: [RouterModule]
})
export class AppRoutingModule { }