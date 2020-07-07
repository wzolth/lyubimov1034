import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(massiv: any[], search: string): any[] {
    var name = search;
    let filter = [];
    if((name != ""||name != null)) {
      return filter ? massiv.filter(a => (a.name+" "+a.surname).toLowerCase().indexOf(name.toLowerCase()) !== -1) : massiv;
    };
  }
}
