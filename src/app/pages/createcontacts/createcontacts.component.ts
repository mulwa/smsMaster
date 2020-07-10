import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ContactsService } from 'app/services/contacts.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { error } from 'protractor';

@Component({
  selector: 'app-createcontacts',
  templateUrl: './createcontacts.component.html',
  styleUrls: ['./createcontacts.component.css']
})
export class CreatecontactsComponent implements OnInit {
  @Input()
  showForm;
  @Output() FormEvent = new EventEmitter<boolean>();
  contactForm: FormGroup;
  

  constructor(private fb: FormBuilder,    
    private toast: ToastrService,
    private contactService:ContactsService,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  get f_data() {
    return this.contactForm.controls;
  }

  closeForm() {
    this.FormEvent.emit(!this.showForm);
  }
  initializeForm() {
    this.contactForm = this.fb.group({
      name: ["", Validators.required],
      phoneNumber: ["", Validators.required],
      
    });
  }
  onSave(){
    this.spinner.show();
    this.contactService.addContact(this.f_data.name.value, this.f_data.phoneNumber.value).subscribe(res=> {
      this.spinner.hide();
      if(res.status ==201){
        this.toast.success("Contact Added Successfully");
        this.closeForm()

      }else{
        this.toast.error("Unable to add contact");
      }
    },error => {
      this.spinner.hide();
      console.log('an error has occured'+error);
    })
  }

}
