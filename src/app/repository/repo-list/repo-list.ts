import { Component, OnInit } from '@angular/core';
import {Repository} from '../repository'
@Component({
  selector: 'app-repo-list',
  standalone: false,
  templateUrl: './repo-list.html',
  styleUrl: './repo-list.css',
})
export class RepoList implements OnInit{
  repository: Repository[] = [
    { "id": 101, "name": "repo-101", "description": "Angular project", "language": "TypeScript", "stars": 50, "createdAt": "2025-01-01", "ownerId": 1 }
  ];

  constructor(){}

  ngOnInit(): void {
  }
}
