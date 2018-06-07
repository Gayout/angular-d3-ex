import { Component, Input } from '@angular/core';

@Component({
  selector: '[blurFilter]',
  template: `
    <svg:filter id="blur">
      <feDropShadow [attr.flood-color]="color" stdDeviation="3"></feDropShadow>
    </svg:filter>
  `,
})
export class BlurFilterComponent {
  @Input()
  public color: string;
}
