import { Injectable } from '@angular/core';

import * as d3 from 'd3';

import { IProperty, MyrePieChartDatum } from './interfaces';

@Injectable()
export class D3Service {
  constructor() { }

  /**
   *
   * Prends des properties en entrée et retour des objets avec des radius
   *
   * @param data : IProperty []
   * @param update : boolean
   * @returns MyrePieChartDatum[]
   */
  public pie(data: IProperty[], update: boolean = false): MyrePieChartDatum[] {
    const pie = d3.pie<IProperty>()
    .sort((a: IProperty, b: IProperty) => b.income - a.income)
    .value((d: IProperty) =>  d.income);

    const pieData: d3.PieArcDatum<IProperty>[] = pie(data);

    return pieData
    .map((d: d3.PieArcDatum<IProperty>) => ({ ...d, update }));
  }

  /**
   * Calcule le path pour le MyrePieChart en entrée
   *
   * @param pieDatum: MyrePieChartDatum
   * @returns path: string
   */
  public arc(pieDatum: MyrePieChartDatum): string {
    const arc: d3.Arc<any, MyrePieChartDatum> = d3.arc<MyrePieChartDatum>()
    .innerRadius(150)
    .outerRadius(200);

    return arc(pieDatum);
  }

  /**
   * Calcule le path pour le MyrePieChart en entrée
   *
   * @param pieDatum: MyrePieChartDatum
   * @returns path: string
   */
  public arcOver(pieDatum: MyrePieChartDatum): string {
    const arc: d3.Arc<any, MyrePieChartDatum> = d3.arc<MyrePieChartDatum>()
    .innerRadius(160)
    .outerRadius(210);

    return arc(pieDatum);
  }
}
