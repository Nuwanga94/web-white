import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { User } from './user';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {


  _url = 'http://localhost:3000/enroll';
  get_url='http://localhost:3000/'
  constructor(private _http: HttpClient) { }

  enroll(user: User) {
    console.log(user.type)
    return this._http.post<any>(this._url,user)
      .pipe(catchError(this.errorHandler))

  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error);
  }

  getData() {
    return this._http.get<any>(this.get_url);

  }
}
