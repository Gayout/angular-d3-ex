import { Component, Input, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';

import { D3Service, IPieChartDatum } from '../../d3';

@Component({
  selector: 'pie-chart',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './pie-chart.component.html',
})
export class PieChartComponent {
  @Input('pieChart')
  public set pieChart(pieChart: any[]) {
    this.data = this._d3Service
    .getPieData(pieChart)
    .map((d, index) => ({ ...pieChart[index], ...d}));
  }

  @ViewChild('svg')
  public svg: ElementRef;

  @ViewChild('tooltip')
  public tooltip: ElementRef;

  public data: IPieChartDatum<any>[];

  public options: { width, height } = { width: '100%', height: '100%' };

  constructor(
    private _d3Service: D3Service,
  ) {
  }

  public get translate(): string {
    return `translate(${this.options.width / 2}, ${this.options.height / 2})`;
  }

  public fill(index: number): string {
    return 'rgb(0,' + (75 - index * 25) + ', ' + (250 - index * 75) + ')';
  }}
