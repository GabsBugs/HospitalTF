import { Component, OnInit } from '@angular/core';
import { AdminauthService } from '../adminauth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  username2 = ''
  password2 = ''
  invalidLogin = false

  constructor(private router:Router, public loginservice: AdminauthService) { }

  ngOnInit(): void {
  }

  checkLogin() {
    if (this.loginservice.authenticate(this.username2, this.password2)
    ) {
      this.router.navigate(['admindash'])

      this.invalidLogin = false
    } else
    {
      this.invalidLogin = true
      alert("ERRO! Seu nome de usuario ou a sua senha estão erradas.");
      this.router.navigate(['home'])
    }

  }

}
