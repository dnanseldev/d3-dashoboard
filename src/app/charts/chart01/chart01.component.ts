import { Component } from '@angular/core';

@Component({
  selector: 'app-chart01',
  standalone: true,
  imports: [],
  templateUrl: './chart01.component.html',
  styleUrl: './chart01.component.scss',
})
export class Chart01Component {
  wdata = [125, 100, 50, 75, 200, 35, 348, 40];
  width = 25;
  height = 250;
}
