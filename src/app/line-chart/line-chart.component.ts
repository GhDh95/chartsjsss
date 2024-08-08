import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [],
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class RadarChartComponent implements OnInit {
  public chart: any;

  createChart() {
    const ctx = document.getElementById('MyLineChart') as HTMLCanvasElement;

    this.chart = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: [
          'Eating',
          'Drinking',
          'Sleeping',
          'Designing',
          'Coding',
          'Cycling',
          'Running'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [65, 59, 90, 81, 56, 55, 40],
          fill: true,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgb(255, 99, 132)',
          pointBackgroundColor: 'rgb(255, 99, 132)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(255, 99, 132)'
        }, {
          label: 'My Second Dataset',
          data: [28, 48, 40, 19, 96, 27, 100],
          fill: true,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgb(54, 162, 235)',
          pointBackgroundColor: 'rgb(54, 162, 235)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(54, 162, 235)'
        }]
      },
      options: {
        elements: {
          line: {
            borderWidth: 3,
            borderColor: 'white'
          }
        },
        scales: {
          r: {
            angleLines: {
              display: true,
              color: 'white' // Set the angle lines to white
            },
            grid: {
              color: 'white', // Set the inner grid lines to white
              lineWidth: 1    // Adjust the line width
            },
            pointLabels: {
              display: true,
              color: 'white', // Set the point labels to white
              font: {
                size: 12 // Adjust font size if necessary
              }
            },
            ticks: {
              display: true,
              color: 'white', // Set the tick labels to white
              backdropColor: 'rgba(0, 0, 0, 0)', // Set the backdrop color to transparent
              font: {
                size: 10 // Adjust font size if necessary
              }
            }
          }
        },
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
