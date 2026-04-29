import { Component, OnInit } from '@angular/core';
import { User } from '../user';
 
@Component({
  selector: 'app-user-list',
  standalone: false,
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList implements OnInit {
  users: User[] = [
    { 
      "id": 1, 
      "username": "user1", 
      "name": "User One", 
      "email": "user1@mail.com", 
      "avatarUrl": "https://i.pravatar.cc/150?img=1", 
      "role": "admin", 
      "location": "Bogotá", 
      "repoIds": [101, 102] 
    }
  ];

  selectedUser?: User;

  constructor() { }

  ngOnInit(): void {}

  onSelect(user: User): void {
    this.selectedUser = user;
  }
}
