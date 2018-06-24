import {Pipe,PipeTransform} from '@angular/core';

@Pipe({

    name:'eduUpper'

})

export class ProductUpperPipe implements PipeTransform{

    transform(value:string, typeReq:string):string
    {
        if(typeReq=="upper")
        {
            value=value.toUpperCase();
        }
        else
        {
            value=value.toLocaleLowerCase();
        }
        
        return value;
    }


}