import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable'

interface Alert {
  alertLevel: String,
  alertText: String,
}

@Injectable()
export class AlertService {

  private _alert: Alert;

  private alertSubject = new Subject<any>();

  constructor() {
    this._alert = {
      alertLevel: '',
      alertText: '',
    }
  }

  public setAlert(alert: Alert) {
    this._alert = alert;
    this.alertSubject.next(this._alert);
  }

  public getAlertSub(): Subject<any> {
    return this.alertSubject;
  }

}
