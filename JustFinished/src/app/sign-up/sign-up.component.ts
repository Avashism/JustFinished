import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../Services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  constructor(private _userService: UserService,
              private router: Router) { }
 Submit( form: NgForm) {
    this._userService.Register(form).subscribe(
      response => {
        console.log(response); } )
    console.log(form.value);
  }
  ngOnInit() {
  }

}
