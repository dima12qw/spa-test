import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './layout/home/home.component';
import {UsersComponent} from './layout/users/users.component';
import {UserDetailsComponent} from './layout/user-details/user-details.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './layout/services/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  // {
  //   path: 'users',
  //   component: UsersComponent
  // },
  // {
  //   path: 'user/:id',
  //   component: UserDetailsComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
