import { Component, AfterViewInit, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { VisitsService } from '../services/visits.service';

import { CustomerService } from './usecases/structure';


@Component({
  templateUrl: './starter.component.html'

})

export class StarterComponent implements AfterViewInit, OnInit {

  public day: Date = new Date();
  public model;
  public customerService: CustomerService;
  public schedule_date: string;
  public schedule_dateSelected: string;
  public modality = [];
  public modalitySelected: string;
  public partner: string;

  constructor(private visitsService: VisitsService) {


  }



  ngAfterViewInit() { }

  ngOnInit() {

    this.modality = [
      { name: 'Domiciliar e clinica' },
      { name: 'Apenas clínica' },
      { name: 'Apenas domiciliar' }
    ];

    this.visitsService.getCustomer().subscribe(result => {
      this.customerService = result;
      console.log(result);
      console.log(this.customerService);
    })
  }

  /* adicionar dia */
  public nextDay(incr: number) {
    this.day = new Date(this.day.getTime() + incr * 24 * 60 * 60 * 1000);
    console.log(this.schedule_date);
  }

  /* filtro */
 /*  public filterBy(filter: string) {
    switch (filter) {
      case 'today':
        console.log('todos os eventos do dia');
        break;

    }
    case 'modality':
    this.customerService = this.customerService.filter(modality => {
      return customerService.modality().
    })
  } */
}
