import { Component } from '@angular/core';
import { IProperty } from './d3/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public properties: IProperty[] = [
    {
      id: 1,
      name: 'Toto Tower',
      color: '#17c89d',
      income: 100000,
    },
    {
      id: 2,
      name: 'Tata Tower',
      color: '#ee3261',
      income: 75000,
    }
  ];
}
