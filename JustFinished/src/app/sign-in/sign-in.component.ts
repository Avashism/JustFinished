import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../Services/user.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor( private _userService: UserService,
              private  _router: Router) { }

  login( form: NgForm) {
    this._userService.login(form).subscribe(
      response => {
        console.log(response);
      if (response !== false) {
        this._router.navigate(['/dashboard']);
      } } )
    console.log(form.value);
  }

  ngOnInit() {
  }

}
