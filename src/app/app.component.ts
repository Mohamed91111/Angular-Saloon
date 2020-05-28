import { Component } from '@angular/core';
import { LocalStorage } from './local-storage.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LocalStorage]
})
export class AppComponent {
  title = 'Angular-Saloon';
}
