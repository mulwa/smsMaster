import { ContactsService } from './../../services/contacts.service';
import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { ContactI } from 'app/interfaces/contactI';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { Contact } from 'app/interfaces/contactResponse';

@Component({
  selector: 'app-compose-message',
  templateUrl: './compose-message.component.html',
  styleUrls: ['./compose-message.component.css']
})
export class ComposeMessageComponent implements OnInit {
  @Input()
  contact:Contact;
  messageForm: FormGroup;

  
  

  constructor(private fb: FormBuilder,    
    private toast: ToastrService,
    private contactService:ContactsService,
    private spinner: NgxSpinnerService) {
   }
   ngOnchange(){

   }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.messageForm = this.fb.group({
      message: ["", Validators.required],
    });
  }
  get f_data() {
    return this.messageForm.controls;
  }
  sendSms(){
    this.spinner.show();
    this.contactService.sendSms(this.f_data.message.value,this.contact.phone_number,this.contact.id).subscribe(res => {
      if(res.status == 201){
        this.spinner.hide();
        this.toast.success("Message Send Successfly");

      }else{
        this.toast.error("Unable to Send Message");

      }
    }, error => {
      console.log(error );
    })
  }
  

}
