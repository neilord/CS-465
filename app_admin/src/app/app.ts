import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar'; // Import navbar

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, NavbarComponent], // Add NavbarComponent
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Travlr Getaways Admin');
}
