export interface IProperty {
  income: number;
  id: number;
  name: string;
  color: string;
  update?: boolean;
}

export interface MyrePieChartDatum extends d3.PieArcDatum<IProperty> {
  update: boolean;
}
