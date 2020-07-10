import { config } from './../helpers/global';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {AuthI} from "../interfaces/authI";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient, private router: Router) {}

  getAuth(email, password) {
    let body = {
      email,
      password
    };
    return this.http.post<AuthI>(`${config.apiUrl}auth/login`, body, {
      observe: "response"
    });
  }
  getAccessToken() {
    if (localStorage.getItem("token")) {
      return localStorage.getItem("token");
    }
  }
  logOut() {
    localStorage.removeItem("token");
    // this.router.navigate(["/login"]);
    console.log("logged out successfully");
  }
}
