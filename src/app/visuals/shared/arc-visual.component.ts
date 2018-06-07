import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import * as d3 from 'd3';
import { IPieChartDatum } from '../../d3';
import { PieChartComponent } from '../graph/pie-chart.component';

@Component({
  selector: '[arcVisual]',
  template: `
    <svg:path #path
              [attr.fill]="arcVisual.color"
              attr.stroke-width="1"
              [attr.d]="arc(arcVisual)"
              (mouseenter)="onMouseenter()"
              (mouseleave)="onMouseleave()"
              >
    </svg:path>
  `,
})
export class ArcVisualComponent {
  @Input('arcVisual')
  public arcVisual: IPieChartDatum<any>;

  @ViewChild('path')
  public path: ElementRef;

  public get arc(): d3.Arc<any, d3.DefaultArcObject> {
    return d3.arc()
    .innerRadius(150)
    .outerRadius(210);
  }

  public get d3Path(): d3.Selection<any, any, null, undefined> {
    return d3.select(this.path.nativeElement);
  }

  public get svg(): d3.Selection<any, any, null, undefined> {
    return d3.select(this._pieChart.svg.nativeElement);
  }

  public get tooltip(): d3.Selection<any, any, null, undefined> {
    return d3.select(this._pieChart.tooltip.nativeElement);
  }

  constructor(private _pieChart: PieChartComponent) {
  }

  public onMouseenter(): void {
    const arc = this.d3Path;
    const y = window.scrollY;

    const leftS = this.svg
    .node()
    .getBoundingClientRect()
    .left;

    const { left, top, width } = arc
    .node()
    .getBoundingClientRect();

    arc
    .transition()
    .duration(500)
    .attr('filter', 'url(#blur)')
    .attr('stroke', '#000');

    this.tooltip
    .style('display', 'table')
    .style('left', `${left - leftS + width / 2}px`)
    .style('top', `${top + y}px`)
    .html(`${this.arcVisual.name}<b>${Math.floor(this.arcVisual.value)} €</b>`);
  }
  public onMouseleave(): void {
    d3.select(this.path.nativeElement)
    .transition()
    .duration(500)
    .attr('filter', null)
    .attr('stroke', null);

    this.tooltip.style('display', 'none');
  }
}
