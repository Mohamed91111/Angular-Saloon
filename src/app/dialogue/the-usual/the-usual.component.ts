import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { LocalStorage } from '../../local-storage.service';

@Component({
  selector: 'app-the-usual',
  templateUrl: './the-usual.component.html',
  styleUrls: ['./the-usual.component.css']
})
export class TheUsualComponent implements OnInit {
  @Output() click = new EventEmitter<boolean>();
  @Output() theUsual = new EventEmitter<string>();
  constructor(private localStorage: LocalStorage) { }

  ngOnInit(): void {
  }

  getUsual() {
    const usualDrink = this.localStorage.getUsual();
    const clicked = true;
    this.theUsual.emit(usualDrink);
    this.click.emit(clicked);
  }

}