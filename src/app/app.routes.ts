import { CanMatchFn, RedirectCommand, Router, Routes } from "@angular/router";

import { NoTaskComponent } from "./tasks/no-task/no-task.component";
import { resolveUserName, resoveTitle, UserTasksComponent } from "./users/user-tasks/user-tasks.component";
import { NotFoundComponent } from "./not-found/not-found/not-found.component";
import {routes as userRoutes}from './users/users.routes'
import { inject } from "@angular/core";

const dummyCanMatch :CanMatchFn=(route,segment)=>{
  const router = inject(Router)
  const shouldGetAccess = Math.random();
  if (shouldGetAccess< 0.5) {
    return true
  }
  // wenn false ist dann umleiten wir
  return new RedirectCommand(router.parseUrl('/unautorized'))
}

export const routes: Routes = [
  { path: '',
     component: NoTaskComponent,
     title:'No task selected'

   },
  {
    path: 'users/:userId', // adam mitone chanta dynamic route dashte bashe <domain>/users/:userId/:task
    component: UserTasksComponent,
    children:userRoutes,
    canMatch:[dummyCanMatch],
    data:{message:'Hallo World'},
    resolve:{resolveUserName},
    title: resoveTitle
  },
  {
    path:'**',
    component:NotFoundComponent,
    title:'Not Found Page'
  },
]
