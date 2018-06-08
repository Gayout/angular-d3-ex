import { Component, Input, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { MyrePieChartDatum } from './interfaces';

import { select, interpolate } from 'd3';

import { D3Service } from './d3.service';

const FRAMES = 20;

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[arc]', // <element arc>
  templateUrl: './arc.component.html',
  styleUrls: ['./arc.component.css']
})
export class ArcComponent {
  @Input()
  public set pieDatum(pieDatum: MyrePieChartDatum) {
    this._animation(pieDatum);
    this._pieDatum = pieDatum;
    this.color = pieDatum.data.color;
  }

  @ViewChild('path')
  public path: ElementRef;

  public color: string;

  private _pieDatum: MyrePieChartDatum;

  constructor(
    private _d3: D3Service,
    private _renderer: Renderer2,
  ) { }

  public mouseEnter() {
    select(this.path.nativeElement)
    .transition()
    .duration(300)
    .attr('stroke', 'black')
    .attr('d', this._d3.arcOver(this._pieDatum));
  }

  public mouseLeave() {
    select(this.path.nativeElement)
    .transition()
    .duration(300)
    .attr('stroke', 'transparent')
    .attr('d', this._d3.arc(this._pieDatum));
  }

  private _animation(target: MyrePieChartDatum): void {
    const start = this._pieDatum || { endAngle: 0, startAngle: 0 };
    const end = target;

    const f: (number) => MyrePieChartDatum = interpolate(start, end);

    const values: (() => MyrePieChartDatum)[] = Array.from(
      Array(FRAMES + 1),
      (_, i) => f.bind(null, i / FRAMES),
    );

    this._frame(values);
  }

  private _frame(frames: (() => MyrePieChartDatum)[]): void {
    if (frames.length === 0) {
      return;
    }

    setTimeout(() => {
      const path = this._d3.arc(frames.shift()());

      this._renderer.setAttribute(this.path.nativeElement, 'd', path);

      this._frame(frames);
    }, 0);
  }
}
