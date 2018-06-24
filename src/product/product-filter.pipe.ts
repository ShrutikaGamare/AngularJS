import {Pipe,PipeTransform} from '@angular/core';
import {IProduct} from './product.model'
import { log } from 'util';


@Pipe({
    name:'ProductFilter'
})

export class ProductFilterPipe implements PipeTransform
{
    transform(value:IProduct[],filterBy:string):IProduct[]
    {
        filterBy = filterBy?filterBy.toLowerCase():null
       
        /* I need to learn this */
        return filterBy? value.filter((product:IProduct)=>
        product.productName.toLowerCase().indexOf(filterBy)!==-1):value

         
        
    }
}
