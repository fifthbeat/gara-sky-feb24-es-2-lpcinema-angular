import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'es-2-lpcinema-angular';
  landingPages = [
    { title: 'Home', path: '/home', description: 'Welcome to the home page' },
    { title: 'About', path: '/about', description: 'Learn more about us' },
    { title: 'Contact', path: '/contact', description: 'Get in touch with us' }
  ];
}
