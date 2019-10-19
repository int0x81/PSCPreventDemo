import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[mlmodel-directive]',
})
export class MlModelDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}