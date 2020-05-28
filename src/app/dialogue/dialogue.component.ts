import { Component, OnInit } from '@angular/core';
import { LocalStorage } from '../local-storage.service';

@Component({
  selector: 'app-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.css']
})
export class DialogueComponent implements OnInit {
newUser: boolean;
nameRegistered: boolean;
lastName: string;
beverage: string;
selected: boolean;
  constructor(private localStorage: LocalStorage) { }

  ngOnInit(): void {
    this.newUser = this.localStorage.newUser();
    this.nameRegistered = this.newUser;
    if (this.newUser) {
      this.lastName = this.localStorage.getName();
    }
  }


  onNameReg(name: string, lastName: string) {
    if (name === '' || lastName === '') {
      alert('Please provide name and last name!!');
    } else {
        this.localStorage.registerName(name, lastName);
        this.nameRegistered = true;
        this.lastName = lastName;
    }
  }

  onSelection(selected: boolean) {
    this.selected = selected;
  }
  getSelectedBev(bev: string) {
    this.beverage = bev;
  }

  deleteMe() {
    this.localStorage.neverHere();
  }
}