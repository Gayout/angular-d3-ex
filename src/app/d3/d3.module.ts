import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PieChartComponent } from './pie-chart.component';
import { D3Service } from './d3.service';
import { ArcComponent } from './arc.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PieChartComponent,
    ArcComponent,
  ],
  exports: [
    PieChartComponent,
  ],
  providers: [
    D3Service,
  ]
})
export class D3Module { }
