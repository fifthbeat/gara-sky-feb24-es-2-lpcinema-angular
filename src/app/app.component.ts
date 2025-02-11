import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContentStackService } from './services/content-stack.service';
import { HeaderComponent } from "./components/header/header.component";
import { StackEntry } from './models/stack-entry';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'es-2-lpcinema-angular';
  stack: StackEntry | undefined;

  constructor(readonly contentStackService: ContentStackService) {
    this.contentStackService.fetchLandingPages().subscribe(entries => {
      this.stack = entries[0] as StackEntry;
    })
  }
}
