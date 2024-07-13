import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.html.component.html',
  styleUrls: ['./home.html.component.css'],
  standalone: true
})
export class HomeHtmlComponent {

  constructor(private router: Router) { }

}
