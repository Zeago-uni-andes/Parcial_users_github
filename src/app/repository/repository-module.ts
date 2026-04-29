import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RepoList } from './repo-list/repo-list';

@NgModule({
  declarations: [RepoList],
  imports: [CommonModule,RouterModule],
  exports: [RepoList]
})
export class RepositoryModule {}
