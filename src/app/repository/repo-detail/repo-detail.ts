import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Repository } from '../repository';
import { RepositoryService } from '../repository.service';

@Component({
  selector: 'app-repo-detail',
  standalone: false,
  templateUrl: './repo-detail.html',
  styleUrl: './repo-detail.css',
})
export class RepoDetail implements OnInit {
  repoDetail?: Repository;

  constructor(
    private route: ActivatedRoute,
    private repoService: RepositoryService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    
    if (id) {
      this.repoService.getRepositories().subscribe(repos => {
        this.repoDetail = repos.find(r => r.id === id);
      });
    }
  }
}
