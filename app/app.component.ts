import { Component, NgModule, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  FormsModule
} from '@angular/forms';
import { NgSelectModule, NgOption } from '@ng-select/ng-select';

@Component({
  selector: 'my-app',
  template: `
    <label>Your first ng-select</label>
    <ng-select
      [items]="cities"
      [addTag]="true"
      [multiple]="true"
      placeholder="Select city"
      [(ngModel)]="selectedCity"
    >
    </ng-select>

    <pre>{{ selectedCity | json }}</pre>
  `
})
export class AppComponent {
  cities = ['Amsterdam', 'Antwerp', 'Athens', 'Barcelona',
  'Berlin', 'Birmingham', 'Bradford', 'Bremen', 'Brussels', 'Bucharest',
  'Budapest', 'Cologne', 'Copenhagen', 'Dortmund', 'Dresden', 'Dublin', 'Düsseldorf',
  'Essen', 'Frankfurt', 'Genoa', 'Glasgow', 'Gothenburg', 'Hamburg', 'Hannover',
  'Helsinki', 'Leeds', 'Leipzig', 'Lisbon', 'Łódź', 'London', 'Kraków', 'Madrid',
  'Málaga', 'Manchester', 'Marseille', 'Milan', 'Munich', 'Naples', 'Palermo',
  'Paris', 'Poznań', 'Prague', 'Riga', 'Rome', 'Rotterdam', 'Seville', 'Sheffield',
  'Sofia', 'Stockholm', 'Stuttgart', 'The Hague', 'Turin', 'Valencia', 'Vienna',
  'Vilnius', 'Warsaw', 'Wrocław', 'Zagreb', 'Zaragoza'];
}
