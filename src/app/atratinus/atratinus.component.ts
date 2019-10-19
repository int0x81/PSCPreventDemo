import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ATRATINUS_MOCKDATA } from './atratinus-mockdata';

declare var DAT: any; 

@Component({
  selector: 'app-atratinus',
  templateUrl: './atratinus.component.html',
  styleUrls: ['./atratinus.component.css']
})
export class AtratinusComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {}

  ngAfterViewInit() {

    let container = document.getElementById('globecontainer');

    let data: Array<any> = ATRATINUS_MOCKDATA

    var globe = new DAT.Globe( container );
    globe.addData(data, {format: 'magnitude', animated: false, name: "ports"});

    globe.createPoints();

    globe.animate();
  }
}