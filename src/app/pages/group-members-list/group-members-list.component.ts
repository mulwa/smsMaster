import { Member } from './../../interfaces/groupMemberR';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { GroupI } from 'app/interfaces/groupI';
import { ContactI } from 'app/interfaces/contactI';
import { ContactsService } from 'app/services/contacts.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-group-members-list',
  templateUrl: './group-members-list.component.html',
  styleUrls: ['./group-members-list.component.css']
})
export class GroupMembersListComponent implements OnInit, OnChanges {
  @Input()
  group:GroupI;
  groupMembers:Member[];

  

  constructor(private contactService:ContactsService,private toastr: ToastrService) { }
  

  ngOnInit(): void {
  }
  ngOnChanges() {
    this.getGroupsById();
  }
  getGroupsById(){
    this.contactService.getGroupContacts(this.group.id).subscribe(res => {
      if(res.status == 200){
        this.groupMembers = res.body.members;

      }else{
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

}
