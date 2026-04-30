import { Component, OnInit, ChangeDetectorRef} from '@angular/core';
import {Repository} from '../repository'
import { RepositoryService } from '../repository.service';

@Component({
  selector: 'app-repo-list',
  standalone: false,
  templateUrl: './repo-list.html',
  styleUrl: './repo-list.css',
})
export class RepoList implements OnInit{
  repository: Repository[] = [];

  constructor(private repositoryService: RepositoryService, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.fetchRepos();
  }

  fetchRepos(): void {
    this.repositoryService.getRepositories().subscribe({
      next: (data) => {
        this.repository = data;
        this.cd.detectChanges();
        console.log('Repositorios sincronizados:', this.repository.length);
      },
      error: (err) => {
        console.error('Error en la carga de repositorios:', err);
      }
    });
  }
}
