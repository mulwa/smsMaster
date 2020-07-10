import { Contact } from './../../interfaces/contactResponse';
import { ContactsService } from './../../services/contacts.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ContactI } from 'app/interfaces/contactI';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  currentrow = "";
  @Output()
  contactEvent = new EventEmitter<Contact>();
  contacts:Contact[]; 

  constructor(private contactService:ContactsService) {    
  }

  ngOnInit(): void {
    this.getAllContacts();
  }
  getAllContacts(){
    this.contactService.getAllContacts().subscribe((res)=>{
      if(res.status ==200){
        this.contacts = res.body.contacts;        

      }else {
        console.log("cannot load Contacts")
      }

    })
  }

  contactSelected(contact: Contact) {
    this.contactEvent.emit(contact);
    this.currentrow =`${contact.phone_number}`;
    console.log(`contact selected`);
  }

}
