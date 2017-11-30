import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { AlertService } from './alert.service';

@Injectable()
export class IdentityService<Type> {

  private headers: Headers;
  private url = 'http://47.254.24.36:3000/api/users/login';


  constructor(private router: Router, private http: HttpClient, private alertService: AlertService) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
  }


  login(user): void {
    this.http.post(this.url, user)
      .subscribe(res => {
        console.log(res)
        this.router.navigate(['/explorer']);
        // this.alertService.setAlert({alertLevel:'success',alertText:'登陆成功'})
      }, err => {
        this.alertService.setAlert({ alertLevel: 'danger', alertText: err.statusText })
        console.log(err);
      })
  }

  private extractData(res: Response): any {
    return res.json();
  }

}
