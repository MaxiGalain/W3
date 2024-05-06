import { Component, Input, OnInit, } from '@angular/core';
import { Cities } from '../interfaces/cities';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-list-city',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './list-city.component.html',
  styleUrl: './list-city.component.css'
})
export class ListCityComponent implements OnInit{
  @Input() listCities: Cities[] = [];
  displayedColumns: string[] = ['name', 'population', 'percentage'];

  ngOnInit(): void {}

}
