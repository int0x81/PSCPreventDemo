import { Component, OnInit, AfterViewInit, NgZone } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-merenda-chart',
  templateUrl: './merenda-chart.component.html',
  styleUrls: ['./merenda-chart.component.css']
})
export class MerendaChartComponent implements OnInit, AfterViewInit {
  
  constructor() { }

  ngOnInit() {}

  ngAfterViewInit(): void {
    
    let canvas = document.getElementById("kmeanschart") as HTMLCanvasElement;
    let wrapper = document.getElementById("chartwrapper") as HTMLDivElement;
    //wrapper.style.maxWidth = wrapper.clientWidth.toString();
    canvas.width = wrapper.clientWidth - 200;
    canvas.height = Math.round(wrapper.clientWidth / 3);

    const k0_range = 40;
    const k0_start_x = 5;
    const k0_start_y = 10;
    const k1_range = 30;
    const k1_start_x = 45;
    const k1_start_y = 5;
    const k2_range = 30;
    const k2_start_x = 5;
    const k2_start_y = 45;
    const k3_range = 15;
    const k3_start_x = 55;
    const k3_start_y = 65;

    let options: Chart.ChartConfiguration = {
      type: 'scatter',
      data: {
        datasets: [
          {
            label: 'K 0',
            borderColor: "#288970",
            //backgroundColor: "#288970",
            pointRadius: 5,
            pointBorderWidth: 3,
            pointHoverRadius: 8,
            pointHoverBorderWidth: 3,
            data: [{
              x: Math.random() * k0_range + k0_start_x,
              y: Math.random() * k0_range + k0_start_y,
            }, {
              x: Math.random() * k0_range + k0_start_x,
              y: Math.random() * k0_range + k0_start_y,
            }, {
              x: Math.random() * k0_range + k0_start_x,
              y: Math.random() * k0_range + k0_start_y,
            }, {
              x: Math.random() * k0_range + k0_start_x,
              y: Math.random() * k0_range + k0_start_y,
            }, {
              x: Math.random() * k0_range + k0_start_x,
              y: Math.random() * k0_range + k0_start_y,
            }, {
              x: Math.random() * k0_range + k0_start_x,
              y: Math.random() * k0_range + k0_start_y,
            }, {
              x: Math.random() * k0_range + k0_start_x,
              y: Math.random() * k0_range + k0_start_y,
            }, {
              x: Math.random() * k0_range + k0_start_x,
              y: Math.random() * k0_range + k0_start_y,
            }, {
              x: Math.random() * k0_range + k0_start_x,
              y: Math.random() * k0_range + k0_start_y,
            }, {
              x: Math.random() * k0_range + k0_start_x,
              y: Math.random() * k0_range + k0_start_y,
            }, {
              x: Math.random() * k0_range + k0_start_x,
              y: Math.random() * k0_range + k0_start_y,
            }, {
              x: Math.random() * k0_range + k0_start_x,
              y: Math.random() * k0_range + k0_start_y,
            }, {
              x: Math.random() * k0_range + k0_start_x,
              y: Math.random() * k0_range + k0_start_y,
            }, {
              x: Math.random() * k0_range + k0_start_x,
              y: Math.random() * k0_range + k0_start_y,
            }, {
              x: Math.random() * k0_range + k0_start_x,
              y: Math.random() * k0_range + k0_start_y,
            }, {
              x: Math.random() * k0_range + k0_start_x,
              y: Math.random() * k0_range + k0_start_y,
            }, {
              x: Math.random() * k0_range + k0_start_x,
              y: Math.random() * k0_range + k0_start_y,
            }, {
              x: Math.random() * k0_range + k0_start_x,
              y: Math.random() * k0_range + k0_start_y,
            }, {
              x: Math.random() * k0_range + k0_start_x,
              y: Math.random() * k0_range + k0_start_y,
            }, {
              x: Math.random() * k0_range + k0_start_x,
              y: Math.random() * k0_range + k0_start_y,
            }, {
              x: Math.random() * k0_range + k0_start_x,
              y: Math.random() * k0_range + k0_start_y,
            }, {
              x: Math.random() * k0_range + k0_start_x,
              y: Math.random() * k0_range + k0_start_y,
            }, {
              x: Math.random() * k0_range + k0_start_x,
              y: Math.random() * k0_range + k0_start_y,
            }, {
              x: Math.random() * k0_range + k0_start_x,
              y: Math.random() * k0_range + k0_start_y,
            }, {
              x: Math.random() * k0_range + k0_start_x,
              y: Math.random() * k0_range + k0_start_y,
            }, {
              x: Math.random() * k0_range + k0_start_x,
              y: Math.random() * k0_range + k0_start_y,
            }, {
              x: Math.random() * k0_range + k0_start_x,
              y: Math.random() * k0_range + k0_start_y,
            }, {
              x: Math.random() * k0_range + k0_start_x,
              y: Math.random() * k0_range + k0_start_y,
            }, {
              x: Math.random() * k0_range + k0_start_x,
              y: Math.random() * k0_range + k0_start_y,
            }, {
              x: Math.random() * k0_range + k0_start_x,
              y: Math.random() * k0_range + k0_start_y,
            }, {
              x: Math.random() * k0_range + k0_start_x,
              y: Math.random() * k0_range + k0_start_y,
            }, {
              x: Math.random() * k0_range + k0_start_x,
              y: Math.random() * k0_range + k0_start_y,
            }, {
              x: Math.random() * k0_range + k0_start_x,
              y: Math.random() * k0_range + k0_start_y,
            }, {
              x: Math.random() * k0_range + k0_start_x,
              y: Math.random() * k0_range + k0_start_y,
            }, {
              x: Math.random() * k0_range + k0_start_x,
              y: Math.random() * k0_range + k0_start_y,
            }, {
              x: Math.random() * k0_range + k0_start_x,
              y: Math.random() * k0_range + k0_start_y,
            }]
          },
          {
            label: 'K 1',
            //borderColor: "#003463",
            borderColor: "#0099EE", //use in darkmode
            //backgroundColor: "#003463",
            pointRadius: 5,
            pointBorderWidth: 3,
            pointHoverRadius: 8,
            pointHoverBorderWidth: 3,
            data: [
              {
              x: Math.random() * k1_range + k1_start_x,
              y: Math.random() * k1_range + k1_start_y,
            }, {
              x: Math.random() * k1_range + k1_start_x,
              y: Math.random() * k1_range + k1_start_y,
            }, {
              x: Math.random() * k1_range + k1_start_x,
              y: Math.random() * k1_range + k1_start_y,
            }, {
              x: Math.random() * k1_range + k1_start_x,
              y: Math.random() * k1_range + k1_start_y,
            }, {
              x: Math.random() * k1_range + k1_start_x,
              y: Math.random() * k1_range + k1_start_y,
            }, {
              x: Math.random() * k1_range + k1_start_x,
              y: Math.random() * k1_range + k1_start_y,
            }, {
              x: Math.random() * k1_range + k1_start_x,
              y: Math.random() * k1_range + k1_start_y,
            }, {
              x: Math.random() * k1_range + k1_start_x,
              y: Math.random() * k1_range + k1_start_y,
            }, {
              x: Math.random() * k1_range + k1_start_x,
              y: Math.random() * k1_range + k1_start_y,
            }, {
              x: Math.random() * k1_range + k1_start_x,
              y: Math.random() * k1_range + k1_start_y,
            }, {
              x: Math.random() * k1_range + k1_start_x,
              y: Math.random() * k1_range + k1_start_y,
            }, {
              x: Math.random() * k1_range + k1_start_x,
              y: Math.random() * k1_range + k1_start_y,
            }, {
              x: Math.random() * k1_range + k1_start_x,
              y: Math.random() * k1_range + k1_start_y,
            }, {
              x: Math.random() * k1_range + k1_start_x,
              y: Math.random() * k1_range + k1_start_y,
            }, {
              x: Math.random() * k1_range + k1_start_x,
              y: Math.random() * k1_range + k1_start_y,
            }, {
              x: Math.random() * k1_range + k1_start_x,
              y: Math.random() * k1_range + k1_start_y,
            }, {
              x: Math.random() * k1_range + k1_start_x,
              y: Math.random() * k1_range + k1_start_y,
            }, {
              x: Math.random() * k1_range + k1_start_x,
              y: Math.random() * k1_range + k1_start_y,
            }, {
              x: Math.random() * k1_range + k1_start_x,
              y: Math.random() * k1_range + k1_start_y,
            }, {
              x: Math.random() * k1_range + k1_start_x,
              y: Math.random() * k1_range + k1_start_y,
            }, {
              x: Math.random() * k1_range + k1_start_x,
              y: Math.random() * k1_range + k1_start_y,
            }, {
              x: Math.random() * k1_range + k1_start_x,
              y: Math.random() * k1_range + k1_start_y,
            }, {
              x: Math.random() * k1_range + k1_start_x,
              y: Math.random() * k1_range + k1_start_y,
            }, {
              x: Math.random() * k1_range + k1_start_x,
              y: Math.random() * k1_range + k1_start_y,
            }, {
              x: Math.random() * k1_range + k1_start_x,
              y: Math.random() * k1_range + k1_start_y,
            }, {
              x: Math.random() * k1_range + k1_start_x,
              y: Math.random() * k1_range + k1_start_y,
            }, {
              x: Math.random() * k1_range + k1_start_x,
              y: Math.random() * k1_range + k1_start_y,
            }, {
              x: Math.random() * k1_range + k1_start_x,
              y: Math.random() * k1_range + k1_start_y,
            }, {
              x: Math.random() * k1_range + k1_start_x,
              y: Math.random() * k1_range + k1_start_y,
            }]
          },
          {
            label: 'K 2',
            borderColor: "#D4A92A",
            //backgroundColor: "#D4A92A",
            pointRadius: 5,
            pointBorderWidth: 3,
            pointHoverRadius: 8,
            pointHoverBorderWidth: 3,
            data: [
              {
              x: Math.random() * k2_range + k2_start_x,
              y: Math.random() * k2_range + k2_start_y,
            }, {
              x: Math.random() * k2_range + k2_start_x,
              y: Math.random() * k2_range + k2_start_y,
            }, {
              x: Math.random() * k2_range + k2_start_x,
              y: Math.random() * k2_range + k2_start_y,
            }, {
              x: Math.random() * k2_range + k2_start_x,
              y: Math.random() * k2_range + k2_start_y,
            }, {
              x: Math.random() * k2_range + k2_start_x,
              y: Math.random() * k2_range + k2_start_y,
            }, {
              x: Math.random() * k2_range + k2_start_x,
              y: Math.random() * k2_range + k2_start_y,
            }, {
              x: Math.random() * k2_range + k2_start_x,
              y: Math.random() * k2_range + k2_start_y,
            }, {
              x: Math.random() * k2_range + k2_start_x,
              y: Math.random() * k2_range + k2_start_y,
            }, {
              x: Math.random() * k2_range + k2_start_x,
              y: Math.random() * k2_range + k2_start_y,
            }, {
              x: Math.random() * k2_range + k2_start_x,
              y: Math.random() * k2_range + k2_start_y,
            }, {
              x: Math.random() * k2_range + k2_start_x,
              y: Math.random() * k2_range + k2_start_y,
            }, {
              x: Math.random() * k2_range + k2_start_x,
              y: Math.random() * k2_range + k2_start_y,
            }, {
              x: Math.random() * k2_range + k2_start_x,
              y: Math.random() * k2_range + k2_start_y,
            }, {
              x: Math.random() * k2_range + k2_start_x,
              y: Math.random() * k2_range + k2_start_y,
            }, {
              x: Math.random() * k2_range + k2_start_x,
              y: Math.random() * k2_range + k2_start_y,
            }, {
              x: Math.random() * k2_range + k2_start_x,
              y: Math.random() * k2_range + k2_start_y,
            }, {
              x: Math.random() * k2_range + k2_start_x,
              y: Math.random() * k2_range + k2_start_y,
            }, {
              x: Math.random() * k2_range + k2_start_x,
              y: Math.random() * k2_range + k2_start_y,
            }, {
              x: Math.random() * k2_range + k2_start_x,
              y: Math.random() * k2_range + k2_start_y,
            }, {
              x: Math.random() * k2_range + k2_start_x,
              y: Math.random() * k2_range + k2_start_y,
            }]
          },
          {
            label: 'K 3',
            borderColor: "#931322",
            //backgroundColor: "#931322",
            pointRadius: 5,
            pointBorderWidth: 3,
            pointHoverRadius: 8,
            pointHoverBorderWidth: 3,
            data: [{
              x: Math.random() * k3_range + k3_start_x,
              y: Math.random() * k3_range + k3_start_y,
            }, {
              x: Math.random() * k3_range + k3_start_x,
              y: Math.random() * k3_range + k3_start_y,
            }, {
              x: Math.random() * k3_range + k3_start_x,
              y: Math.random() * k3_range + k3_start_y,
            }, {
              x: Math.random() * k3_range + k3_start_x,
              y: Math.random() * k3_range + k3_start_y,
            }, {
              x: Math.random() * k3_range + k3_start_x,
              y: Math.random() * k3_range + k3_start_y,
            }, {
              x: Math.random() * k3_range + k3_start_x,
              y: Math.random() * k3_range + k3_start_y,
            }, {
              x: Math.random() * k3_range + k3_start_x,
              y: Math.random() * k3_range + k3_start_y,
            }, {
              x: Math.random() * k3_range + k3_start_x,
              y: Math.random() * k3_range + k3_start_y,
            }, {
              x: Math.random() * k3_range + k3_start_x,
              y: Math.random() * k3_range + k3_start_y,
            }, {
              x: Math.random() * k3_range + k3_start_x,
              y: Math.random() * k3_range + k3_start_y,
            }, {
              x: Math.random() * k3_range + k3_start_x,
              y: Math.random() * k3_range + k3_start_y,
            }, {
              x: Math.random() * k3_range + k3_start_x,
              y: Math.random() * k3_range + k3_start_y,
            }, {
              x: Math.random() * k3_range + k3_start_x,
              y: Math.random() * k3_range + k3_start_y,
            }, {
              x: Math.random() * k3_range + k3_start_x,
              y: Math.random() * k3_range + k3_start_y,
            }]
  }
      ]
      },
      options: {
        scales: {
            xAxes: [{
                type: 'linear',
                position: 'bottom',
                gridLines: {
                  color: '#EEEEEE',
                  zeroLineWidth: 2
                }
            }],
            yAxes: [{
              type: 'linear',
              position: 'left',
              gridLines: {
                color: '#EEEEEE',
                zeroLineWidth: 2
              }
            }]
        },
        responsive: true,
        maintainAspectRatio: false
      }
    }
    
    new Chart(canvas, options);
  }
}