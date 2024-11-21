import { Routes } from "@angular/router";

import { NoTaskComponent } from "./tasks/no-task/no-task.component";
import { resolveUserName, resoveTitle, UserTasksComponent } from "./users/user-tasks/user-tasks.component";
import { NotFoundComponent } from "./not-found/not-found/not-found.component";
import {routes as userRoutes}from './users/users.routes'

export const routes: Routes = [
  { path: '',
     component: NoTaskComponent,
     title:'No task selected'

   },
  {
    path: 'users/:userId', // adam mitone chanta dynamic route dashte bashe <domain>/users/:userId/:task
    component: UserTasksComponent,
    children:userRoutes,
    data:{message:'Hallo World'},
    resolve:{resolveUserName},
    title: resoveTitle
  },
  {
    path:'**',
    component:NotFoundComponent
  },
]
