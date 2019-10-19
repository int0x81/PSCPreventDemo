import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InfoModalComponent } from '../info-modal/info-modal.component';

@Component({
  selector: 'app-info-point',
  templateUrl: './info-point.component.html',
  styleUrls: ['./info-point.component.css']
})
export class InfoPointComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  openInfoModal() {
    this.modalService.open(InfoModalComponent);
  }
}
