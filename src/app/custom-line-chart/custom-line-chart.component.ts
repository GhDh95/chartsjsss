import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-custom-line-chart',
  templateUrl: './custom-line-chart.component.html',
  standalone: true,
  styleUrls: ['./custom-line-chart.component.css']
})
export class CustomLineChartComponent implements OnInit {
  public chart: any;

  createChart() {
    const ctx = document.getElementById('MyLineChart_') as HTMLCanvasElement;

    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'Monthly Sales',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: 'rgba(75, 192, 192, 1)',
          tension: 0.1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              color: 'white'
            },
            grid: {
              color: 'rgba(255, 255, 255, 0.2)'
            }
          },
          x: {
            ticks: {
              color: 'white'
            },
            grid: {
              color: 'rgba(255, 255, 255, 0.2)'
            }
          }
        },
        plugins: {
          legend: {
            labels: {
              color: 'white' // Change legend label color to white
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
