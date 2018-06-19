import { Pipe, PipeTransform } from '@angular/core';

 @Pipe({
  name: 'filterPartner'
})
export class FilterPartnerPipe implements PipeTransform {
  transform(items: any[], modalitySelected: string): any[] {

    /* if (!items) return []; */
    if (!modalitySelected) return items;

   /*  searchText = searchText.toLowerCase(); */
    return items.filter((mod) => mod.modality === modalitySelected);
  }
}





