import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { IntroPageComponent } from './intro-page/intro-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TeximateModule } from 'ngx-teximate';
import { AboutComponent } from './about/about.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserLandComponent } from './user-land/user-land.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { CreateWorkComponent } from './create-work/create-work.component';
import { CurrentWorkComponent } from './current-work/current-work.component';
import { CompletedComponent } from './completed/completed.component';
import { WorkInviteComponent } from './work-invite/work-invite.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    IntroPageComponent,
    AboutComponent,
    SignInComponent,
    SignUpComponent,
    UserLandComponent,
    CreateWorkComponent,
    CurrentWorkComponent,
    CompletedComponent,
    WorkInviteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   BrowserAnimationsModule,
    TeximateModule,
    MatCardModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
