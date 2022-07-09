import { Component } from '@angular/core';
import { NbAuthJWTToken, NbAuthService, NbAuthToken } from '@nebular/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MyEventInvite';
  user = {};

  constructor(private authService: NbAuthService) {
  
    this.authService.onTokenChange()
      .subscribe((token: NbAuthToken): void => {
        if (token.isValid()) {
          this.user = token.getPayload(); // here we receive a payload from the token and assigns it to our `user` variable 
        }
        
      });
  }

}
