import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Welcome } from './home/welcome/welcome';
import { UserList } from './user/user-list/user-list'

const routes: Routes = [
  { path: 'home', component: Welcome },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'users', component: UserList },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }