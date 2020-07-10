import { MessageslistComponent } from './../../pages/messageslist/messageslist.component';
import { ContactsComponent } from './../../pages/contacts/contacts.component';
import { Routes } from '@angular/router';


import { GroupComponent } from 'app/pages/group/group.component';

export const AdminLayoutRoutes: Routes = [   
    { path:'contacts', component:ContactsComponent},
    { path: 'group', component:GroupComponent},
    {path:'messages', component: MessageslistComponent}
];
