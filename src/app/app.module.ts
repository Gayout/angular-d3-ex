import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { D3Service } from './d3';
import { ZoomableDirective } from './d3/directives/zoomable.directive';
import { PieChartComponent } from './visuals/graph/pie-chart.component';
import { ArcVisualComponent } from './visuals/shared/arc-visual.component';
import { BlurFilterComponent } from './visuals/filters/blur.component';


@NgModule({
  declarations: [
    AppComponent,
    ArcVisualComponent,
    PieChartComponent,
    ZoomableDirective,
    BlurFilterComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [
    D3Service,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
