import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: any, searchStr: string): any {
    if(searchStr === ''){
      return items;
    }else{
      let filteredItemsSurname = items.filter(
        (e: any) => e.surname.toLowerCase().indexOf(searchStr.toLowerCase()) !== -1
      );
      if(filteredItemsSurname.length == 0){
        let filteredItemsName = items.filter(
          (e: any) => e.name.toLowerCase().indexOf(searchStr.toLowerCase()) !== -1
        ); 
        return filteredItemsName;
      }else{
        return filteredItemsSurname;
      }
    }
  }

}
