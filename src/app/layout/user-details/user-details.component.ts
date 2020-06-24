import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {UsersService} from '../services/users.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit, OnDestroy {
  formUser: FormGroup;
  private id: number;
  sub$: Subscription;
  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private userService: UsersService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.formUser = this.fb.group({
      id: [''],
      avatar: [''],
      first_name: [''],
      last_name: [''],
      email: [''],
      username: [''],
      role: [{value: '', disabled: true}],
      city: [''],
      country: [''],
      logged_on: [{value: '', disabled: true}],
      gender: [''],
      language: [{value: '', disabled: true}]
    });

    this.getUserByID();
  }


  getUserByID() {
    const id = +this.route.snapshot.paramMap.get('id');
    if (id) {
      this.id = id;
      this.sub$ = this.userService.getByID(id).subscribe((data)=>{
        this.formUser.patchValue(data);
      });
    }
  }

  submit(values){
    this.userService.updateUser(this.id, values.getRawValue()).subscribe((data)=>{
      this.router.navigate(['users']);
    });
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }
}
