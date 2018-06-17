import { Pipe, PipeTransform } from '@angular/core';

/* @Pipe({
  name: 'filterPartner'
})
export class FilterPartnerPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter(it => {
      return it.toLowerCase().includes(searchText);
    });
  }
} */

@Pipe({
  name: 'filterModality'
})
export declare class FilterModality implements PipeTransform {
  transform(input: any[], props: Array<string>, search?: any, strict?: boolean): any[];
  transform<T>(input: T, props: Array<string>, search?: any, strict?: boolean): T;
}


/* import { PipeTransform } from '@angular/core';
export declare class FilterByPipe implements PipeTransform {
    transform(input: any[], props: Array<string>, search?: any, strict?: boolean): any[];
    transform<T>(input: T, props: Array<string>, search?: any, strict?: boolean): T;
} */
