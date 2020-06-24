import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  isSubmitted = false;
  constructor(private fb: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(values){
    this.isSubmitted = true;
    if(!this.formLogin.valid){
      return;
    } else {
      if(values.username === 'test' || values.password === 'test'){
        localStorage.setItem('auth', 'y');
        this.router.navigate(['home']);
      } else {
        window.alert('Username si parola incorecta');
      }
    }
  };
}
