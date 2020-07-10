import { ToastrService } from 'ngx-toastr';
import { Group } from './../../interfaces/groupResponse';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GroupI } from 'app/interfaces/groupI';
import { ContactsService } from 'app/services/contacts.service';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit {
  @Output()
  groupEvent = new EventEmitter<Group>();
  groups:Group[];
  currentrow = ""; 

  constructor(private contactService:ContactsService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getAllGroups();
  }
  getAllGroups(){
    this.contactService.getAllGroups().subscribe(res => {
      if(res.status ==200){
        this.groups = res.body.groups;
      }else {
        console.log('Unable to Get groups');
        this.toastr.error(
          '<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">Unable To Get Groups</span>',
            "",
            {
              timeOut: 4000,
              enableHtml: true,
              closeButton: true,
              toastClass: "alert alert-danger alert-with-icon",
              
            }
          );
      }
    })
  }
  groupSelected(group:Group){
    this.groupEvent.emit(group);
    this.currentrow =group.group_name;
    console.log(`goup selected`);
  }

}
