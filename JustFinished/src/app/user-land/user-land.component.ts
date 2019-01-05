import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-user-land',
  templateUrl: './user-land.component.html',
  styleUrls: ['./user-land.component.css']
})
export class UserLandComponent implements OnInit {

pieChartLabels = ['Work Completed', 'Incomplete Works', 'Pending Invites'];
  pieChartData = [1, 1, 1];
  pieChartType = 'pie';


  constructor() { }


  ngOnInit()  {
  }

}
