import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { SERVER_ROOT } from '../config';
import {AcceptInvComponent} from './accept-inv/accept-inv.component';
import {MatDialog} from '@angular/material';


@Component({
  selector: 'app-work-invite',
  templateUrl: './work-invite.component.html',
  styleUrls: ['./work-invite.component.css']
})
export class WorkInviteComponent implements OnInit {
  invitations: any[] ;
 public title;
 public description;

  constructor(public dialogue: MatDialog,
              private http: HttpClient) { }

  openDialog() {
    const dialogRef = this.dialogue.open(AcceptInvComponent, {
      data: {projectTitle: this.title, projectDescription: this.description }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result: ${result}');
      this.ngOnInit();
    });
  }

  ngOnInit() {
    this.http.get<any>(`${SERVER_ROOT}/Properties/invitations/avash.mishra@selu.edu`).subscribe(response => {
      console.log(response);
    this.invitations = response ; } ) ;
  }



}
