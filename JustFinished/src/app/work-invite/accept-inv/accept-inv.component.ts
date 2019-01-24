import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {HttpClient} from '@angular/common/http';
import {SERVER_ROOT} from '../../config';

@Component({
  selector: 'app-accept-inv',
  templateUrl: './accept-inv.component.html',
  styleUrls: ['./accept-inv.component.css']
})
export class AcceptInvComponent implements OnInit {
  Title;
  Description;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public http: HttpClient) {
  }
accept(response: boolean) {
    this.http.post<any>(`${SERVER_ROOT}/Properties/`, {'Response': response})
}

reject() {
}
  ngOnInit() {
    this.Title = this.data.projectTitle;
    this.Description = this.data.projectDescription;
  }

}
