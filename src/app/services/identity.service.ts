import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { AlertService } from './alert.service';
import { Config } from '../config'


@Injectable()
export class IdentityService{

  private loginUrl: string;

  constructor(private router: Router, private http: HttpClient, private alertService: AlertService, private config: Config) {
    this.loginUrl = config.apiUrl + '/users/login';
  }

  login(user): void {
    this.http.post(this.loginUrl, user)
      .subscribe(res => {
        console.log(res)
        // this.token = res;
        localStorage.setItem('token',JSON.stringify(res));
        this.router.navigate(['/explorer']);
        // this.alertService.setAlert({alertLevel:'success',alertText:'登陆成功'})
      }, err => {
        console.log('login error')
        this.alertService.setAlert({ alertLevel: 'danger', alertText: err.statusText })
        console.log(err);
      })
  }

}
