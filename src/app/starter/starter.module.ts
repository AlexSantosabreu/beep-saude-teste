import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { NgPipesModule, FilterByPipe } from 'ngx-pipes';
import { StarterComponent } from './starter.component';
import { VisitsService } from '../services/visits.service';


const routes: Routes = [{
	path: '',
	data: {
        title: 'Starter Page',
        urls: [{title: 'Dashboard',url: '/dashboard'},{title: 'Starter Page'}]
    },
	component: StarterComponent
}];

@NgModule({
	imports: [
    	FormsModule,
      CommonModule,
      NgPipesModule,
    	RouterModule.forChild(routes)
    ],
  declarations: [StarterComponent],
  providers:[VisitsService, FilterByPipe]
})
export class StarterModule { }
