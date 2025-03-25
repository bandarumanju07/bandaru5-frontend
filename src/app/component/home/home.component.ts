import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  title = 'Welcome to the Home Page!';
  description =
    'This is the main page of the application where you can find all the available features and links.';

  // You can add more logic here if needed for your home page.
}
