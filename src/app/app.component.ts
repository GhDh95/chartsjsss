import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {BarChartComponent} from "./bar-chart/bar-chart.component";
import {RadarChartComponent} from "./line-chart/line-chart.component";
import {PieChartComponent} from "./pie-chart/pie-chart.component";
import {CustomLineChartComponent} from "./custom-line-chart/custom-line-chart.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BarChartComponent, RadarChartComponent, PieChartComponent, CustomLineChartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-chartjs';
}
