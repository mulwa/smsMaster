import { ContactsService } from './../../services/contacts.service';
import { ComposeMessageComponent } from './../../pages/compose-message/compose-message.component';
import { MessageslistComponent } from './../../pages/messageslist/messageslist.component';
import { CreatecontactsComponent } from './../../pages/createcontacts/createcontacts.component';
import { AddgroupComponent } from './../../pages/addgroup/addgroup.component';
import { ContactsComponent } from './../../pages/contacts/contacts.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';;

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GroupComponent } from 'app/pages/group/group.component';
import { GroupMembersListComponent } from 'app/pages/group-members-list/group-members-list.component';
import { ContactListComponent } from 'app/pages/contact-list/contact-list.component';
import { GroupListComponent } from 'app/pages/group-list/group-list.component';
import { GroupMessageComponent } from 'app/pages/group-message/group-message.component';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
  ],
  declarations: [    
    ContactsComponent,
    CreatecontactsComponent,
    GroupComponent,
    AddgroupComponent,
    MessageslistComponent,
    ComposeMessageComponent,
    GroupMembersListComponent,
    ContactListComponent,
    GroupListComponent,
    GroupMessageComponent,

  ],
  providers: [ContactsService]
})

export class AdminLayoutModule {}
