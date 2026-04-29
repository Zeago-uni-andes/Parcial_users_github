import { Component, OnInit, ChangeDetectorRef} from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.html', // Verifica si tu archivo es .html o .component.html
  standalone: false                // CRÍTICO: para que funcione con tu NgModule
})
export class UserList implements OnInit {
  users: User[] = [];
  selectedUser?: User;

  constructor(private userService: UserService,private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
        this.cd.detectChanges();
      },
      error: (err) => console.error('Error:', err)
    });
  }

  onSelect(user: User): void {
    this.selectedUser = user;
    this.cd.detectChanges();
  }
}