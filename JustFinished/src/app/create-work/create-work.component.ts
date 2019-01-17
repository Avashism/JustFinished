import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { SERVER_ROOT } from '../config';
@Component({
  selector: 'app-create-work',
  templateUrl: './create-work.component.html',
  styleUrls: ['./create-work.component.css']
})
export class CreateWorkComponent implements OnInit {

  constructor(private http: HttpClient) { }
  Title;
  Description;
  participants: string;
  adds = [];
  index = 0;
  message = null ;
cID = 1;
added() {
    this.adds[this.index] = this.participants;
    this.index = this.index + 1;
    console.log(this.adds);
  }
  deleteMember(item) {
    this.adds.splice(this.adds.indexOf(item) , 1);
    this.index = this.index - 1 ;

  }
  Submit() {
    console.log(this.adds);
    this.message = "Verifying Participants..."
    this.http.post<any>(`${SERVER_ROOT}/invite/verification`, { 'Participant': this.adds}).subscribe( response => {
        if (response !== true) {
          this.message = "Mentioned Users are not registered" ;
        } else {
          this.message = "Creating Project..."
          this.http.post<any>(`${SERVER_ROOT}/invite/project`, {'Title': this.Title , 'Description': this.Description, 'CreaterID': this.cID}).subscribe( response2 => {
            this.http.post<any>(`${SERVER_ROOT}/invite/invite`, {'Project_Id': response2 , 'Participants' : this.adds }).subscribe( response3 => {
              if (response3 === true) {
                this.message = 'Your Project has been Created';
              } else {
                this.message = "Error";
              }
            });
          })
        }
    });
  }

  ngOnInit() {
  }
}
