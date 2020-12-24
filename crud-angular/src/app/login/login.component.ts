import { LoginService } from '../login.service';
import { Employee } from '../employee';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  token!: Observable<string>;
  //token = new Observable<any>();
  // token!: Observable<string>;
  email = '';
  password = '';

  constructor(private loginService: LoginService,
    private router: Router) { }

  ngOnInit(): void {
    this.getToken();
    console.log(this.token);
  }

  getToken() {
    this.loginService.login(this.email, this.password).subscribe(
      data => {
        console.log(data);
        console.log(data.token);
        this.token = data;
      },
      error => console.log(error));
  }

}
