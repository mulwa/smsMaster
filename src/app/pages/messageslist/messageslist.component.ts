import { ContactsService } from './../../services/contacts.service';
import { Component, OnInit } from '@angular/core';
import { Message } from 'app/interfaces/messagesRe';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-messageslist',
  templateUrl: './messageslist.component.html',
  styleUrls: ['./messageslist.component.css']
})
export class MessageslistComponent implements OnInit {
  messages:Message[];

  constructor(private contactService:ContactsService,private toast: ToastrService,) { }

  ngOnInit(): void {
    this.getAllMessages();
  }

  getAllMessages(){
    this.contactService.getAllSendMessages().subscribe(res=> {
      if(res.status == 200){
        this.messages = res.body.messages;        

      }else{
        this.toast.error('Unable to get All Delivered messages')

      }
    })
    
  }

}
