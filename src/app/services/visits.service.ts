import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment.prod';

@Injectable()
export class VisitsService {

  constructor(private http: HttpClient) {}

  public getCustomer(): Observable<any> {
    return this.http.get(`${environment.API_BEEP}/CustomerService`);
  }
}
