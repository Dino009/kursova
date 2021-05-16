import { Component, OnInit } from '@angular/core';
// @ts-ignore
import * as CanvasJS from './canvasjs.min.js';

@Component({
  selector: 'app-visit',
  templateUrl: './visit.component.html',
  styleUrls: ['./visit.component.sass']
})
export class VisitComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let dataPoints = [];
    let y = 0;
    for ( var i = 0; i < 10000; i++ ) {
      y += Math.round(5 + Math.random() * (-5 - 5));
      dataPoints.push({ y: y});
    }
    let chart = new CanvasJS.Chart("chartContainert", {
      zoomEnabled: true,
      animationEnabled: true,
      title: {
        text: "Visit & Sales Statistics"
      },
      subtitles:[{
        text: "Try Zooming and Panning"
      }],
      data: [
        {
          type: "line",
          dataPoints: dataPoints
        }]
    });

    chart.render();
  }

}
