import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


HttpClient

@Injectable({
  providedIn: 'root'
})
export class ApifoodService {

  constructor(private _HttpClient: HttpClient) { }
  getData(): Observable<any> {
    return this._HttpClient.get("")

  }

}
