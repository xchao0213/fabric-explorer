import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Config } from '../config'


@Injectable()
export class IdentityService{

  private loginUrl: string;

  constructor(private http: HttpClient, private config: Config) {
    this.loginUrl = config.apiUrl + '/users/login';
  }

  login(user): Observable<any> {
    return this.http.post(this.loginUrl, user)
      
  }

}
