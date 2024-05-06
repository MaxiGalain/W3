import { Component, Input, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { ListCityComponent } from './list-city/list-city.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Cities } from './interfaces/cities';
import { MatButtonModule } from '@angular/material/button';
import { SnackbarServiceService } from '../core/services/snackbar-service.service';

@Component({
  selector: 'app-cities',
  standalone: true,
  imports: [MatInputModule, MatCardModule, ListCityComponent,FormsModule, CommonModule, MatButtonModule],
  templateUrl: './cities.component.html',
  styleUrl: './cities.component.css'
})
export class CitiesComponent implements OnInit {

  searchTerm: string = '';
  listCities: Cities[] = [];
  cities: Cities[] = [
    {name : "India", population : 1409902000},
    {name : "China", population : 1403426000},
    {name : "Estados Unidos", population : 331800000},
    {name : "Indonesia", population : 271629000},
    {name : "Pakistán", population : 224654000},
    {name : "Nigeria", population : 219743000},
    {name : "Brasil", population : 211420000},
    {name : "Bangladés", population : 181781000},
    {name : "Rusia", population : 146712000},
    {name : "México", population : 127792000},
    {name : "Japón", population : 126045000},
    {name : "Filipinas", population : 108772000},
    {name : "Egipto", population : 101000000},
    {name : "Etiopía", population : 100882000},
    {name : "Vietnam", population : 97591000},
    {name : "República del Congo", population : 89561000},
    {name : "Irán", population : 83914000},
    {name : "Turquía", population : 83752000},
    {name : "Alemania", population : 83421000},
    {name : "Tailandia", population : 68232000},

  ];
  total: number = 0;
  ngOnInit(): void {
    // Código que deseas ejecutar cuando el componente se inicialice
    console.log(this.cities);
  }
  constructor(private snackbarService: SnackbarServiceService) { }
  
  searchCountries(): void {
    if (this.searchTerm.length >= 3) {
      this.listCities = this.cities.filter(country =>
        this.searchTerm.split('').every(char =>
          this.normalizeString(country.name).toLowerCase().includes(char.toLowerCase())
        )
      ).slice(0, 5);
      if(this.listCities.length == 0){
        this.showSnackbar('No se encontraron resultados.', 'error')
      }else {
        this.showSnackbar('Se encontraron ' + this.listCities.length + ' ciudades.', 'success')
      }
      this.getTotalCost() 
    } else {
      this.listCities = [];
      this.showSnackbar('Debe ingresar al menos 3 caracteres.', 'error')
    }
  }
  

  getTotalCost() {
    this.total = this.listCities.map(t => t.population).reduce((acc, value) => acc + value, 0);
    this.getPercentajeTotal(this.total)
  }
  getPercentajeTotal(total: number){
    this.listCities.forEach(country => {
      country.percentage = (country.population / this.total) * 100;
    });
  }
  normalizeString(text: string): string {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  }
  showSnackbar(msg: string, type: string): void {
    this.snackbarService.showMessage(msg,type);
  }

}
