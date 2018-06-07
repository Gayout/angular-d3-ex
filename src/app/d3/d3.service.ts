import { Injectable } from '@angular/core';
import * as d3 from 'd3';

@Injectable()
export class D3Service {
  public applyZoomableBehaviour(svgElement, containerElement): void {
    const svg = d3.select(svgElement);
    const container = d3.select(containerElement);

    const zoomed = () => {
      const transform = d3.event.transform;
      container.attr('transform', 'translate(' + transform.x + ',' + transform.y + ') scale(' + transform.k + ')');
    };

    const zoom = d3.zoom().on('zoom', zoomed);
    svg.call(zoom);
  }

  public getPieData(data: { value: number }[]): d3.PieArcDatum<{ value: number }>[] {
    const pie = d3.pie<{ value: number }>()
    .sort((a, b) => b.value - a.value)
    .value(d => d.value);

    return pie(data);
  }
}
