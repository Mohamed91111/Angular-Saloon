import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LocalStorage } from '../../local-storage.service';


@Component({
  selector: 'app-select-beverage',
  templateUrl: './select-beverage.component.html',
  styleUrls: ['./select-beverage.component.css']
})
export class SelectBeverageComponent implements OnInit {
  selected: boolean;
  @Output() theUsual = new EventEmitter<boolean>();
  @Output() bev = new EventEmitter<string>();

  constructor(private localStorage: LocalStorage) { }

  ngOnInit(): void {
    this.selected = false;
  }

  onOrder(drink: string) {
    this.localStorage.saveData(drink);
    this.selected = true;
    this.theUsual.emit(this.selected);
    this.bev.emit(drink);
  }
}