import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Welcome } from './home/welcome/welcome';
import { UserList } from './user/user-list/user-list'
import { RepoList } from './repository/repo-list/repo-list'

const routes: Routes = [
  { path: 'home', component: Welcome },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'users', component: UserList },
  { path: 'repos', component: RepoList },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }