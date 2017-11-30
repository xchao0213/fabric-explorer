import { Component, OnInit } from '@angular/core';

import { IdentityService } from '../services/identity.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [IdentityService]

})
export class LoginComponent implements OnInit {

  user = {
    username: '',
    password: ''
  }

  constructor(private identityService: IdentityService<any>) { }

  ngOnInit() {
  }

  onSubmit() {
    this.identityService.login(this.user);
    // this.identityService.login(this.user).subscribe(res => {
    //   console.log(res)
    // })
  }

}