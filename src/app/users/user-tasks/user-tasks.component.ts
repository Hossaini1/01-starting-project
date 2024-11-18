import { Component, computed, DestroyRef, inject, Input, input, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, ActivatedRouteSnapshot, ResolveFn, RouterLink, RouterOutlet, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  imports:[RouterOutlet,RouterLink],
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent  {

  // userId=input.required<string>();

  // private userService = inject(UsersService);

  // userName = computed(()=>this.userService.users.find((user)=>user.id===this.userId())?.name);  


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

  // in old version this way für extracting parameter userId
  userName = input.required<string>();
  message=input.required<string>();
  // private userService = inject(UsersService);
  // private activatedRoute = inject(ActivatedRoute);
  // private destroyRef = inject(DestroyRef);
  
  
/*   ngOnInit(): void {
  console.log('Hier ist static Data '+ this.message);
  
    // this.activatedRoute.snapshot.paramMap.get('userId')
    const subscription = this.activatedRoute.paramMap.subscribe({
      next: (_paramMap) => {
        this.userName = this.userService.users.find((user) => user.id === _paramMap.get('userId'))?.name || '';
      }
    })
    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  } */



}

export const resolveUserName:ResolveFn<string> =(activatedRoute:ActivatedRouteSnapshot,
  routerState:RouterStateSnapshot
)=>{
  
  const userService =inject(UsersService);
  const userName = userService.users.find((user) => user.id === activatedRoute.paramMap
  .get('userId'))?.name || '';
  return userName
}
