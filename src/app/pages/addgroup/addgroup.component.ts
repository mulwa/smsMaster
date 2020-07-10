import { ContactsService } from './../../services/contacts.service';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-addgroup',
  templateUrl: './addgroup.component.html',
  styleUrls: ['./addgroup.component.css']
})
export class AddgroupComponent implements OnInit {
  @Input()
  showForm;
  @Output() FormEvent = new EventEmitter<boolean>();
  groupForm: FormGroup;

  constructor(private fb: FormBuilder,    
    private toast: ToastrService,
    private contactService:ContactsService,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.initializeForm();
  }
  onSave(){
    this.spinner.show();
    this.contactService.addGroup(this.f_data.name.value).subscribe(res => {
      this.spinner.hide();
      if(res.status == 201){
        this.toast.success("Group added Successfuly");

      }else{
        this.toast.error("Unable to Add Group");
      }
    }, error => {
      this.spinner.hide()
      this.toast.error("Unable to Add Group");
      console.log(error);

    })
  }
  closeForm() {
    console.log("closing toggling")
    this.FormEvent.emit(!this.showForm);
  }
  initializeForm() {
    this.groupForm = this.fb.group({
      name: ["", Validators.required],
      
    });
  }
  get f_data() {
    return this.groupForm.controls;
  }

}
