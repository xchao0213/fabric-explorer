import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { AlertService } from './services/alert.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AlertService]
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';


  alert = {
    alertLevel: '',
    alertText: '',
  }

  sub: Subscription;

  constructor(private alertService: AlertService) {

  }

  ngOnInit(): void {
    this.sub = this.alertService.getAlertSub().subscribe(res => {
      this.alert = res;
    })
  }

  ngOnDestroy(): void {

  }

  closeAlert(): void {
    this.alert = {
      alertLevel: '',
      alertText: '',
    }
  }





}
