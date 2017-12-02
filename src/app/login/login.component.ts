import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { IdentityService } from '../services/identity.service';
import { AlertService } from '../services/alert.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  user = {
    username: '',
    password: ''
  }

  constructor(private identityService: IdentityService,private router: Router,private alertService: AlertService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.identityService.login(this.user).subscribe(res => {
      console.log(res)
      // this.token = res;
      localStorage.setItem('token',JSON.stringify(res));
      this.router.navigate(['/explorer']);
      // this.alertService.setAlert({alertLevel:'success',alertText:'登陆成功'})
    }, err => {
      console.log('login error')
      this.alertService.setAlert({ alertLevel: 'danger', alertText: err.statusText })
      console.log(err);
    });
    // this.identityService.login(this.user).subscribe(res => {
    //   console.log(res)
    // })
  }

}
