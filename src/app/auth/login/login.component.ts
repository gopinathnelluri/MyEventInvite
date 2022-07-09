import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbAuthService, NbLoginComponent } from '@nebular/auth';
import { take } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends NbLoginComponent {
  
  loginWithGoogle() {
    this.service.authenticate('google')
          .pipe(
            take(1))
          .subscribe(() => {
            this.router.navigateByUrl('/dashboard');
          });
  }

  loginWithFacebook(){
    this.service.authenticate('facebook')
          .pipe(
            take(1))
          .subscribe(() => {
            this.router.navigateByUrl('/dashboard');
          });
  }

  loginWithTwitter(){
    this.service.authenticate('twitter')
          .pipe(
            take(1))
          .subscribe(() => {
            this.router.navigateByUrl('/dashboard');
          });
  }
}
