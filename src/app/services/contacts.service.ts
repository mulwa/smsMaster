import { config } from './../helpers/global';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from '@angular/router';
import {ContactResponse} from "../interfaces/contactResponse";
import { GroupResponse } from "../interfaces/groupResponse";
import {GroupMemberI} from "../interfaces/groupMemberR";
import { MessageReponse } from '../interfaces/messagesRe'

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  headers = new HttpHeaders({
    "Content-Type": "application/json",
    Authorization: `Bearer ${this.getAccessToken()}`
  });

  constructor(private http: HttpClient, private router: Router) {}

  getAllContacts() {
    return this.http.get<ContactResponse>(
      `${config.apiUrl}contact`,
      {
        observe: "response",
        headers: this.headers
      }
    );
  }
  getAccessToken() {
    if (localStorage.getItem("token")) {
      return localStorage.getItem("token");
    }
  }
  getAllGroups() {
    return this.http.get<GroupResponse>(
      `${config.apiUrl}group`,
      {
        observe: "response",
        headers: this.headers
      }
    );
  }
  getGroupContacts(id:number) {
    return this.http.get<GroupMemberI>(
      `${config.apiUrl}group/contact-group/${id}`,
      {
        observe: "response",
        headers: this.headers
      }
    );
  }
  addGroup(groupName) {
    let body = {
      groupName:groupName,
    }
    console.log(body);
    return this.http.post(
      `${config.apiUrl}group`,
      body,
      { observe: "response", headers: this.headers }
    );
  }
  addContact(name:string,phoneNumber:string) {
    let body = {
      name,
      phoneNumber
    }
    console.log(body);
    return this.http.post(
      `${config.apiUrl}contact`,
      body,
      { observe: "response", headers: this.headers }
    );
  }
  // "userId":3,
	// "message":"Hello Members again",
	// "phoneNumber":"0707200314"
  sendSms(message:string,phoneNumber:string,userId,) {
    let body = {
      message,
      phoneNumber,
      userId
    }
    console.log(body);
    return this.http.post(
      `${config.apiUrl}sms/send`,
      body,
      { observe: "response", headers: this.headers }
    );
  }
  getAllSendMessages() {
    return this.http.get<MessageReponse>(
      `${config.apiUrl}sms/send`,
      {
        observe: "response",
        headers: this.headers
      }
    );
  }
}
