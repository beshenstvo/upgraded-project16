import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBth'
})
export class SortBthPipe implements PipeTransform {

  what: boolean = false;
  transform(items: any): any {
    if(!this.what){
      this.what = true 
      console.log("по возрастанию")
      function byField() {
        return (a: any, b:any) => a.birthday < b.birthday ? 1 : -1;
      }
      console.log(items.sort(byField()))
      return items.sort(byField())
    }else{
      this.what = false
      console.log("по убыванию")
      function byField() {
        return (a: any, b:any) => a.birthday > b.birthday ? 1 : -1;
      }
      console.log(items.sort(byField()))
      return items.sort(byField())
    }
  }
}
