import { Component, computed, inject, Input, input } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent {

  userId=input.required<string>();

  private userService = inject(UsersService);

  userName = computed(()=>this.userService.users.find((user)=>user.id===this.userId())?.name);  


  //alternative mit @Input dekorator 
  // private userService = inject(UsersService);
  // userName: string | undefined;
  // private _userId!: string;

  // @Input({ required: true })
  // set userId(uid: string) {
  //   this._userId = uid;
  //   this.userName = this.userService.users.find((u) => u.id === uid)?.name
  // }

  // get userId(): string {
  //   return this._userId
  // }


}
