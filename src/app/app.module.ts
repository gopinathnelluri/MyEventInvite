import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HttpClientModule } from '@angular/common/http';
import { NbAuthModule, NbPasswordAuthStrategy } from '@nebular/auth';
import { AuthGuardService } from './auth-guard.service';
import { NbFirebaseAuthModule, NbFirebaseFacebookStrategy, NbFirebaseGoogleStrategy, NbFirebasePasswordStrategy, NbFirebaseTwitteStrategy } from '@nebular/firebase-auth';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { FirebaseAPIService } from './firebase-api.service';


export interface NbAuthSocialLink {
  link?: string,
  url?: string,
  target?: string,
  title?: string,
  icon?: string,
}

const socialLinks: NbAuthSocialLink[] = [
  {
    link: "../google",
    target: "google",
    icon: "google",
  }
];

export const defaultSettings: any = {
  forms: {
    login: {
      redirectDelay: 500, // delay before redirect after a successful login, while success message is shown to the user
      strategy: 'email',  // strategy id key.
      rememberMe: true,   // whether to show or not the `rememberMe` checkbox
      showMessages: {     // show/not show success/error messages
        success: true,
        error: true,
      },
      socialLinks: socialLinks, // social links at the bottom of a page
    },
    register: {
      redirectDelay: 500,
      strategy: 'email',
      showMessages: {
        success: true,
        error: true,
      },
      terms: true,
      socialLinks: socialLinks,
    },
    requestPassword: {
      redirectDelay: 500,
      strategy: 'email',
      showMessages: {
        success: true,
        error: true,
      },
      socialLinks: socialLinks,
    },
    resetPassword: {
      redirectDelay: 500,
      strategy: 'email',
      showMessages: {
        success: true,
        error: true,
      },
      socialLinks: socialLinks,
    },
    logout: {
      redirectDelay: 500,
      strategy: 'email',
    },
    validation: {
      password: {
        required: true,
        minLength: 4,
        maxLength: 50,
      },
      email: {
        required: true,
      },
      fullName: {
        required: false,
        minLength: 4,
        maxLength: 50,
      },
    },
  },
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyCQwSGAGVN61h2qj5b3DAdDTLd3_fjAles',
      authDomain: 'myeventinvite.firebaseapp.com',
      databaseURL: 'https://myeventinvite.firebaseio.com',
      projectId: 'myeventinvite',
      storageBucket: 'myeventinvite.appspot.com',
      messagingSenderId: '1019515617044',
      appId: '1:1019515617044:web:fecb70fc982d3e3c5c8c01',
      measurementId: "G-K5PE9JTRZB"
    }),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    NbFirebaseAuthModule,
    NbAuthModule.forRoot({
      forms: {
        login: {
          strategy: 'password',
          rememberMe: true,
          socialLinks: socialLinks,
        },
        register: {
          strategy: 'password',
          terms: true,
          socialLinks: socialLinks,
        },
        logout: {
          strategy: 'password',
        },
        requestPassword: {
          strategy: 'password',
          socialLinks: socialLinks,
        },
        resetPassword: {
          strategy: 'password',
          socialLinks: socialLinks,
        },
        validation: {
          password: {
            required: true,
            minLength: 6,
            maxLength: 50,
          },
          email: {
            required: true,
          },
          fullName: {
            required: false,
            minLength: 4,
            maxLength: 50,
          },
        },
      },
      strategies: [
        NbFirebasePasswordStrategy.setup({
          name: 'password',
          login: {
            redirect: {
              success: 'dashboard',
            },
          },
          register: {
            redirect: {
              success: 'dashboard',
            },
          },
          logout: {
            redirect: {
              success: 'auth/login',
            },
          },
          requestPassword: {
            redirect: {
              success: 'auth/login',
            },
          },
          resetPassword: {
            redirect: {
              success: 'auth/login',
            },
          },
        }),
        NbFirebaseGoogleStrategy.setup({
          name: 'google',
        }),
        NbFirebaseFacebookStrategy.setup({
          name: 'facebook',
        }),
        NbFirebaseTwitteStrategy.setup({
          name: 'twitter',
        }),
      ],
    }),
    NbLayoutModule,
    NbEvaIconsModule,
  ],
  providers: [AuthGuardService, FirebaseAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
