import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-work',
  templateUrl: './create-work.component.html',
  styleUrls: ['./create-work.component.css']
})
export class CreateWorkComponent implements OnInit {

  constructor() { }
  participants: string;
  adds = [];
  index = 0;
  added() {
    this.adds[this.index] = this.participants;
    this.index = this.index + 1;
    console.log(this.adds);
  }
  deleteMember(item) {
    this.adds.splice(this.adds.indexOf(item) , 1);
    this.index = this.index - 1 ;

  }
  ngOnInit() {
  }
}
