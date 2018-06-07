export interface IPieChartDatum<T> extends d3.PieArcDatum<T> {
  id: number | string;
  color: string;
  name: string;
}
