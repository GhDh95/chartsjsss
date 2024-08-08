import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-pie-chart',
  standalone: true,
  imports: [],
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  public chart: any;

  createChart() {
    const ctx = document.getElementById('MyPieChart') as HTMLCanvasElement;

    this.chart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 50, 100, 80, 120, 60],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(153, 102, 255)',
            'rgb(255, 159, 64)'
          ],
          hoverOffset: 4
        }]
      },
      options: {
        plugins: {
          legend: {
            labels: {
              color: 'white' // Change label color to white
            }
          }
        }
      }
    });
  }

  ngOnInit(): void {
    this.createChart();
  }
}
