import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
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
import { AddedComponent } from './create-work/added/added.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ProjectComponent } from './project/project.component';
import {ChartsModule} from 'ng2-charts';
import {FormControlName} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import {UserService} from './Services/user.service';

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
    WorkInviteComponent,
    AddedComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   BrowserAnimationsModule,
    TeximateModule,
    MatCardModule,
    MatGridListModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    ChartsModule,
    HttpClientModule
  ],
  providers: [
    FormControlName, HttpClient , UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
