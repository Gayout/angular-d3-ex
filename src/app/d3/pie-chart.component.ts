import { Component, Input } from '@angular/core';
import { IProperty, MyrePieChartDatum } from './interfaces';
import { D3Service } from './d3.service';

const WIDTH = 800;
const HEIGHT = 800;

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {
  @Input()
  public set data(data: IProperty[]) {
    this.pieData = this._d3.pie(data);
  }

  public pieData: MyrePieChartDatum[];

  public options = {
    width: WIDTH,
    height: HEIGHT,
  };

  public get transform(): string {
    return `translate(250, 250)`;
  }

  constructor(private _d3: D3Service) { }
}
