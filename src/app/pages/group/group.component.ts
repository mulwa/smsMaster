import { Component, OnInit } from '@angular/core';
import { GroupI } from 'app/interfaces/groupI';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
  show_form: boolean = false;
  group:GroupI;

  constructor() { }

  ngOnInit(): void {
  }

  onGroupSelect($event) {
    console.log($event);
    this.group = $event;
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
