import { Component, OnInit } from '@angular/core';
import { NbAuthService, NbAuthToken } from '@nebular/auth';
import { catchError, of, take, share } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { FirebaseAPIService } from '../firebase-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  title = 'MyEventInvite';
  user: any = {};

  userToken$: Observable<NbAuthToken>;
  isAuthenticated$: Observable<boolean>;
  data$!: Observable<any>;
  
  constructor(private authService: NbAuthService, private firebaseApi: FirebaseAPIService) { 
    this.authService.onTokenChange()
      .subscribe((token: NbAuthToken): void => {
        if (token.isValid()) {
          this.user = token.getPayload(); // here we receive a payload from the token and assigns it to our `user` variable 
          console.log(this.user);
        }
        
      });
      this.userToken$ = this.authService.onTokenChange();
      this.isAuthenticated$ = this.authService.onAuthenticationChange();
  }

  ngOnInit(): void {
  }

  getData() {
    this.data$ = this.firebaseApi.getGreeting()
      .pipe(
        take(1),
        catchError((error) => of(error)),
        share(),
      );
  }

}
