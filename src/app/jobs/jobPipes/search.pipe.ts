import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(DataArray:any[],searchString:string,searchKey:string): any {
    
    const result:any=[]

    if(!DataArray || !searchString || !searchKey) {
    return DataArray

    }

    else{
      DataArray.forEach((item:any)=>{
        if(item.jobtitle.trim().toLowerCase().includes(searchString.trim().toLowerCase())){
          result.push(item)
        }
      })
      return result
    }
  }


}
