import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbAuthService } from '@nebular/auth';
import { take } from 'rxjs';

@Component({
  selector: 'app-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.scss']
})
export class GoogleComponent implements OnInit {

  constructor(private service: NbAuthService, private router: Router) { }

  ngOnInit(): void {
    this.service.authenticate('google')
          .pipe(
            take(1))
          .subscribe(() => {
            this.router.navigateByUrl('/dashboard');
          });
  }

}
