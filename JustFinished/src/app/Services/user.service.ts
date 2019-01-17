import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SERVER_ROOT } from '../config';
import {NgForm} from '@angular/forms';

@Injectable()

export class UserService {
  constructor(private http: HttpClient) {

  }

  login(form: NgForm) {
    return this.http.post<any>(`${SERVER_ROOT}/login`,
      form.value);
  }
  Register(form: NgForm) {
    return this.http.post<any>(`${SERVER_ROOT}/user`,
      form.value);
  }
}
