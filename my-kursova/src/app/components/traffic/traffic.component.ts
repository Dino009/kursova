import { Component, OnInit } from '@angular/core';

// @ts-ignore
import * as CanvasJS from './canvasjs.min.js';

@Component({
  selector: 'app-traffic',
  templateUrl: './traffic.component.html',
  styleUrls: ['./traffic.component.sass']
})
export class TrafficComponent implements OnInit {

  constructor() { }



  ngOnInit() {
    let chart = new CanvasJS.Chart("chartContainer", {
      theme: "light2",
      animationEnabled: true,
      title:{
        text: "Traffic Sources"
      },
      data: [{
        type: "pie",
        showInLegend: true,
        toolTipContent: "<b>{name}</b>: ${y} (#percent%)",
        indexLabel: "{name} - #percent%",
        dataPoints: [
          { y: 450, name: "Food" },
          { y: 120, name: "Insurance" },
          { y: 300, name: "Traveling" },
          { y: 800, name: "Housing" },
          { y: 150, name: "Education" },
          { y: 150, name: "Shopping"},
          { y: 250, name: "Others" }
        ]
      }]
    });

    chart.render();
  }

}
