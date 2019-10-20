import { Component, OnInit, AfterViewInit } from '@angular/core';
import { GlobalEventService } from 'src/app/services/implementations/globalevent.service';

import anime from 'animejs/lib/anime.es';
//import { AnimeInstance } from 'animejs';

@Component({
  selector: 'app-interactive-zea-logo',
  templateUrl: './interactive-zea-logo.component.html',
  styleUrls: ['./interactive-zea-logo.component.css']
})
export class InteractiveZeaLogoComponent implements AfterViewInit {

  //states, if the cursor is currently on the logo
  mouseOverLogo: boolean = false;

  //states, if the logo is currently flipped 90 degree
  isLogoFlipped: boolean = false;

  companyLogo: HTMLElement;
  barOne: HTMLElement;
  barTwo: HTMLElement;
  barThree: HTMLElement;

  //the duration of the logo transformation in milliseconds
  readonly transitionDuration: number = 250;
  readonly transitionEasing: string = 'easeOutQuad';

  constructor(private globalEventService: GlobalEventService) { }

  ngAfterViewInit(): void {
    
    this.companyLogo = document.getElementById("companylogo");
    this.barOne = document.getElementById("logo-bar-one");
    this.barTwo = document.getElementById("logo-bar-two");
    this.barThree = document.getElementById("logo-bar-three");
  }

  transformCompanyLogo() {

    this.mouseOverLogo = !this.mouseOverLogo;

    if(this.isLogoFlipped)
      return;

    if(this.mouseOverLogo) {

      this.transformLogoToNavIcon();
    }
    else {

      this.transformLogoToOriginalState();
    }
  }

  private transformLogoToNavIcon() {

    //transform bar one
    anime({
      targets: this.barOne,
      easing: this.transitionEasing,
      duration: this.transitionDuration,
      d: 'M0,3.324 l36.888,0 l0,7.157 l-36.888,0 l0,-7.157 Z'
    });

    //transform bar two
    anime({
      targets: this.barTwo ,
      easing: this.transitionEasing,
      duration: this.transitionDuration,
      d: 'M36.888 17.56 c0,0 0,0 0 7.157 l -36.888 0 c 0,0 0,0 0,-7.157 l 36.888 0 Z'
    });

    //transform bar three
    anime({
      targets: this.barThree,
      easing: this.transitionEasing,
      duration: this.transitionDuration,
      d: 'M0,38.03 l36.888,0 l0,-7.157 l-36.888,0 l0,7.157 Z'
    });
  }

  private transformLogoToOriginalState() {

    //transform bar one to original state
    anime({
      targets: this.barOne,
      easing: this.transitionEasing,
      duration: this.transitionDuration,
      d: 'M0,3.324 l36.888,0 l0,10.157 l-36.888,0 l0,-10.157 Z'
    });

    //transform bar two to original state
    anime({
      targets: this.barTwo,
      easing: this.transitionEasing,
      duration: this.transitionDuration,
      d: 'M36.888,15.56 c0,5.64 -4.508,10.156 -10.085,10.156 l-26.803,0 c0,-5.641 4.507,-10.156 10.085,-10.156 l26.803,0 Z'
    });
    
    //transform bar three to original state
    anime({
      targets: this.barThree,
      easing: this.transitionEasing,
      duration: this.transitionDuration,
      d: 'M0,38.03 l36.888,0 l0,-10.157 l-36.888,0 l0,10.157 Z'
    });
  }

  onCompanyLogoClick() {

    let cubicBezier: string = "cubic-bezier(0, .95, .13, 1.03)";

    if (!this.isLogoFlipped) {
      this.companyLogo.style.transform = "rotate(-90deg)";
      this.companyLogo.style.transition = "all 0.2s";
      this.companyLogo.style.transitionTimingFunction = cubicBezier;
    } else {
      this.companyLogo.style.transform = "rotate(0deg)";
      this.companyLogo.style.transition = "all 0.2s";
      this.companyLogo.style.transitionTimingFunction = cubicBezier;

      if(!this.mouseOverLogo)
        this.transformLogoToOriginalState();
    }

    this.isLogoFlipped = !this.isLogoFlipped;

    this.globalEventService.toggleSidebarSubject.next();
  }
}