import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: 'app-navbar.html'
})
export class AppNavbarComponent {

  text: string;

  constructor() {
    console.log('Hello NavbarComponent Component');
    this.text = 'Hello World';
  }

}
