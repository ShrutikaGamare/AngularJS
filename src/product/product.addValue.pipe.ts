import {Pipe,PipeTransform} from '@angular/core';


@Pipe({
   name:'addValue'
})

export class AddValuePipe implements PipeTransform
{
    transform(value:number):number
    {
        if(value<20)
        {
            value+=20;
        }
        else
        {
            value=value;
        }
        return value;
    }

}
