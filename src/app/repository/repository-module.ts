import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RepoList } from './repo-list/repo-list';
import { RepoDetail } from './repo-detail/repo-detail';

@NgModule({
  declarations: [RepoList, RepoDetail],
  imports: [CommonModule, RouterModule],
  exports: [RepoList],
})
export class RepositoryModule {}
