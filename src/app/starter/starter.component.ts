import { Component, AfterViewInit, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FilterByPipe} from 'ngx-pipes';


import { VisitsService } from '../services/visits.service';

import { CustomerService } from './usecases/structure';


@Component({
  templateUrl: './starter.component.html',

})

export class StarterComponent implements AfterViewInit, OnInit {

  public day: Date = new Date();
  public model;
  public customerService: CustomerService;
  public schedule_date: string;
  public schedule_dateSelected: string;
  public modality = [];
  public modalitySelected: string;
  public partner = [];
  public partenerSelected: string;

  constructor(private visitsService: VisitsService, private filterByPipe: FilterByPipe) {


  }



  ngAfterViewInit() { }

  ngOnInit() {

    this.modality = [
      { name: 'Domiciliar e clinica', modality: 'homecare  office' },
      { name: 'Apenas clínica', modality: 'office' },
      { name: 'Apenas domiciliar', modality: 'homecare' }
    ];

    this.partner = [
      { name: 'Lâmina Icaraí', },
      { name: 'Beep Vacinas' },
      { name: 'Lâmina Barra' }
    ];
    /* <option>Lâmina Icaraí</option>
                    <option>Beep Vacinas</option>
                    <option>Lâmina Barra </option> */
    /* this.visitsService.getCustomer().subscribe(result => {
this.customerService = result.filter(curentDay => { return curentDay.schedule_date.toLowerCase().includes('2018-06-09') });
console.log(result);
console.log(this.customerService);
console.log(this.datePipe.transform(this.day, 'yyyy-MM-dd'));
}); */

    this.visitsService.getCustomer().subscribe(result => {
      this.customerService = result;
      console.log(result);
      console.log(this.customerService);
    });
  }

  /* adicionar dia */
  public nextDay(incr: number) {
    this.day = new Date(this.day.getTime() + incr * 24 * 60 * 60 * 1000);
    console.log(this.schedule_date);
  }

  /* filtro data*/
 /*  public filterByDate(filter: string) {
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

   /* filtro Modalidade*/
 /*  public filterByModality(items: any[], criteria: string): any {
     if(criteria === 'Domiciliar e clinica') {return items} else
     return items.filter(it => {
       return it.modality === criteria;
     })

  } */
   /* filtro parceiro*/
 /*  public filterByParceiro(item: any[], criteria: string): any {
     if(criteria === 'all') {return items} else
     return items.filter(item => {
       return items.partner.name === criteria;
     })
  } */


}
