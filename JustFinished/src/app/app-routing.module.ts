import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IntroPageComponent} from './intro-page/intro-page.component';
import {AboutComponent} from './about/about.component';
import {UserLandComponent} from './user-land/user-land.component';
import {CreateWorkComponent} from './create-work/create-work.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {ProjectComponent} from './project/project.component';

const routes: Routes = [
  { path: '', component: IntroPageComponent},
  { path: 'about', component: AboutComponent},
  { path: 'dashboard', component: UserLandComponent},
  { path: 'create-work', component: CreateWorkComponent},
  { path: 'sign-in', component: SignInComponent},
  { path: 'sign-up', component: SignUpComponent},
  { path: 'project', component: ProjectComponent},







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
