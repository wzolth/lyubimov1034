import { Pipe, PipeTransform } from '@angular/core';
import { buy } from '../shared/sell.model';
import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';


    @Pipe({
      name: 'id'
    })
export class IdPipe implements PipeTransform {
   arr_RU = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Э', 'Ю', 'Я'];
    

  transform(workers: buy[], ID: number, AGE): any {
   let N = 33; 
  let arr_RU = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Э', 'Ю', 'Я'];
    Array.apply(null, {length: N}).map(Number.call, Number)
    if (ID == 1) {

      
      workers.sort(function(a,b){
        let a1=a.name.substr(0, 1).toUpperCase();
        let b1=b.name.substr(0, 1).toUpperCase();
        for(let i=0;i<33;i++){
          
          if(b1==arr_RU[i]){
            var b11= arr_RU.indexOf(arr_RU[i])
          }
          
        }
        for(let i=0;i<33;i++){
          
          if(a1==arr_RU[i]){
            var a11= arr_RU.indexOf(arr_RU[i])
          }
          
        }
        return a11 - b11
      })
    }
    
    if (ID == 2){
      workers.sort(function(a,b){
        let a1=a.name.substr(0, 1).toUpperCase();
        let b1=b.name.substr(0, 1).toUpperCase();
        for(let i=0;i<33;i++){
          
          if(b1==arr_RU[i]){
            var b11= arr_RU.indexOf(arr_RU[i])
          }
          
        }
        for(let i=0;i<33;i++){
          
          if(a1==arr_RU[i]){
            var a11= arr_RU.indexOf(arr_RU[i])
          }
          
        }
        return b11 - a11
      })
   
    }

    

   

    return workers;
  }

}
