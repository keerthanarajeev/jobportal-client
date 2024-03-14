import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchjob'
})
export class SearchjobPipe implements PipeTransform {

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
        if(item.companyname.trim().toLowerCase().includes(searchString.trim().toLowerCase())){
          result.push(item)}
          if(item.category.trim().toLowerCase().includes(searchString.trim().toLowerCase())){
            result.push(item)}
      })

      
      return result
    }
  }


}
