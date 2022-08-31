import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
// export class SearchPipe implements PipeTransform {

//   transform(value: unknown, ...args: unknown[]): unknown {
//     if(!value)return null;
//     if(!args)return value;

//     return value.filter(function(data){
//         return JSON.stringify(data).toLowerCase().includes(args);
//     });
//   }

// }

export class SearchPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      return it.toLocaleLowerCase().includes(searchText);
    });
  }
  }