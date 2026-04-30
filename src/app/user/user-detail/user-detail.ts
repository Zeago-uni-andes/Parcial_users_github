import { Component, Input} from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-detail',
  standalone: false,
  templateUrl: './user-detail.html',
})
export class UserDetail {
  @Input() userDetail!: User;
}
