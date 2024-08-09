import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Chart01Component } from './charts/chart01/chart01.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Chart01Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'd3-dashoboard';
}
