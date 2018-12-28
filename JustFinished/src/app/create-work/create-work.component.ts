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
  count = 0;
  added() {
    this.adds[this.count] = this.participants;
    console.log(this.adds[this.count]);
    console.log(this.adds)
    this.count = this.count + 1;
    console.log(this.count);
  }
  ngOnInit() {
  }
}
