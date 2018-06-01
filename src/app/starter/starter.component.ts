import { Component, AfterViewInit } from '@angular/core';
import { CustomerService } from './../starter/usecases/structure'

@Component({
	templateUrl: './starter.component.html'
})

export class StarterComponent implements AfterViewInit {

  public day: Date = new Date();
  public customerService: CustomerService;


	constructor() {


	}

  ngAfterViewInit(){}

  public nextDay(incr: number){
    this.day = new Date(this.day.getTime()+incr*24*60*60*1000);
  }
}
