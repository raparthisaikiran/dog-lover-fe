import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  authUser(body: any) {
    return this.http.post(environment.BASE_URL + "auth/login", body);
  }
}
