import { Component, OnInit } from '@angular/core';
import  Chart  from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    const dates = ["24/08/2021","25/08/2021","26/08/2021","27/08/2021","28/08/2021","29/08/2021",]
    const datapoints = [12, 19, 3, 5, 2, 3]
    const myChart = new Chart("myBar", {

      type: 'bar',
      data: {
          labels: dates,
          datasets: [{
              label: '# of Votes',
              data: datapoints,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      plugins:[ChartDataLabels],
      options: {
          scales: {
              y: {
                  beginAtZero: true,
                  title: {
                    display: true,
                    text: "degree "
                  }
              },
              x: {
                beginAtZero: true,
                title: {
                  display: true,
                  text: "date"
                }
            }
          }
      }
  });
  }

}
