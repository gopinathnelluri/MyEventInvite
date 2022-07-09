import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NbAlertModule, NbButtonModule, NbCheckboxModule, NbIconModule, NbInputModule } from '@nebular/theme';
import { NbAuthModule } from '@nebular/auth';
import { LoginComponent } from './login/login.component';
import { GoogleComponent } from './google/google.component';
import { NbEvaIconsModule } from '@nebular/eva-icons';


@NgModule({
  declarations: [
    LoginComponent,
    GoogleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NbAlertModule,
    NbInputModule,
    NbIconModule,
    NbButtonModule,
    NbCheckboxModule,
    
    NbAuthModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
