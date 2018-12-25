import { Component, OnInit } from '@angular/core';
import { TextAnimation } from 'ngx-teximate';
import {fadeInDown, fadeInLeft, fadeInRight, fadeOutRight} from 'ng-animate';

@Component({
  selector: 'app-intro-page',
  templateUrl: './intro-page.component.html',
  styleUrls: ['./intro-page.component.css']
})
export class IntroPageComponent implements OnInit {

  constructor() { }
  enterAnimation: TextAnimation = {
    animation: fadeInRight,
    delay: 50,
    type: 'letter'
  };
  enterAnimation2: TextAnimation = {
    animation: fadeInLeft,
    delay: 50,
    type: 'letter'
  };

  ngOnInit() {
  }

}
