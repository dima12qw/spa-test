import {Component, OnDestroy, OnInit} from '@angular/core';
import {UsersService} from '../services/users.service';
import {User} from './user';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {
   users: User[];
  collectionSize: number;
  page = 1;
  pageSize = 10;
  sub$ : Subscription;
  constructor(private userService: UsersService,
              private router: Router) { }

  ngOnInit(): void {
    this.sub$ = this.userService.getAllUsers().subscribe((data)=>{
      this.collectionSize = data.length;
      this.users = data;
    });
  }

  editUser(id: number){
    this.router.navigate(['user', id]);
  }


  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

}
