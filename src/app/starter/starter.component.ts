
import { Component, AfterViewInit, OnInit, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import {DatePipe} from '@angular/common';

import { FilterByPipe} from 'ngx-pipes';
import { VisitsService } from '../services/visits.service';
import { CustomerService } from './usecases/structure';
import { FilterPartnerPipe } from '../shared/filter-partner.pipe';


@Component({
  templateUrl: './starter.component.html',

})

export class StarterComponent implements AfterViewInit, OnInit {

  public day: Date = new Date();
  public localdate = new EventEmitter;
  public model;
  public customerService: CustomerService;
  public schedule_date: string;
  public schedule_dateSelected: string;
  public modality = [];
  public modalitySelected: string;
  public partner = [];
  public partenerSelected: string;
  bsValue = new Date();
  data: Date;


  constructor(private visitsService: VisitsService, private filterByPipe: FilterByPipe) {


  }



  ngAfterViewInit() { }

  ngOnInit() {

    this.modality = [
      { name: 'Domiciliar e clinica', modality: '' },
      { name: 'Apenas clínica', modality: 'office' },
      { name: 'Apenas domiciliar', modality: 'homecare' }
    ];

    this.partner = [
      { name: 'Lâmina Icaraí', },
      { name: 'Beep Vacinas' },
      { name: 'Lâmina Barra' }
    ];


     this.visitsService.getCustomer().subscribe(result => {
  this.customerService = result.filter(curentDay => { return curentDay.schedule_date.toLowerCase().includes('2018-06-18') });
  console.log(result);
  console.log(this.customerService);
 /*  console.log(this.datePipe.transform(this.day, 'yyyy-MM-dd')); */

  });


  }

  /* adicionar dia */
  public nextDay(incr: number) {
    this.day = new Date(this.day.getTime() + incr * 24 * 60 * 60 * 1000);
    console.log(this.nextDay);
  }

  onValueChange(value: Date): void {
    this.data = value;
  }

   /* filtro parceiro*/
 /*  public filterByParceiro(item: any[], criteria: string): any {
     if(criteria === 'all') {return items} else
     return items.filter(item => {
       return items.partner.name === criteria;
     })
  } */

 /* onMudouData(evento) {

    this.subscribe.add(
      this.programacaoService.localeDate.subscribe(
        resultado => {

                     console.log(resultado);
            }
          )
        }
      )
    )

  } */


/*   public nextDay(incr:number){
    this.day = new Date(this.day.getTime()+incr*24*60*60*1000);
    this.customerService.localeDate.emit(this.day.toLocaleDateString("pt-BR",  this.options).replace("/", "-").replace('/', '-')); */
    //this.localeDate.emit({localeDate: this.day});
 /*  } */
 /*  public lastDay(incr:number){
    this.day = new Date(this.day.getTime()+incr*24*60*60*1000);
    this.customerService.localeDate.emit(this.day.toLocaleDateString("pt-BR",  this.options).replace("/", "-").replace('/', '-')  );
  } */
}
