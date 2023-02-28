import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-doclogin',
  templateUrl: './doclogin.component.html',
  styleUrls: ['./doclogin.component.css']
})
export class DocloginComponent implements OnInit {

  username = ''
    password = ''
    invalidLogin = false

  constructor(private router:Router, public loginservice: AuthenticationService) { }

  ngOnInit(): void {
  }

  checkLogin() {
    if (this.loginservice.authenticate(this.username, this.password)
    ) {
      this.router.navigate(['docdash'])

      this.invalidLogin = false
    } else
    {
      this.invalidLogin = true
      alert("ERRO! Seu nome de usuario ou a sua senha estão erradas.");
      this.router.navigate(['home'])
    }

  }

}
