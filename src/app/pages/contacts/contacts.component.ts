import { ContactsService } from './../../services/contacts.service';
import { Component, OnInit } from '@angular/core';
import { ContactI } from 'app/interfaces/contactI';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contact:ContactI;
  parentMessage = "message from parent";
  show_form: boolean = false;
  

  constructor() { }

  ngOnInit(): void {
  }
  
  onContactSelect($event) {
    console.log($event);
    this.contact = $event;
    console.log(`executed`);
  }
  toogleForm() {
    this.show_form = !this.show_form;
    console.log(`clicked ${this.show_form}`);
  }
  receiveFormEvent(event) {
    console.log(`event Emiter ${event}`);
    this.show_form = event;
  }
  

}
