import {Component,OnInit} from '@angular/core';
import {IProduct} from './product.model';
import {ProductService} from './product.service';

@Component({
selector:'product-comp',
templateUrl:`./product.component.html`,
//styles:['thead{color:red}','h3{color:green}']

//if you have mutliple css files to apply
styleUrls:['./product.component.css']
})


export class ProductComponent implements OnInit
{
    title:string="ShrutikaGamare";
    showImage:boolean=true;
    filterData:string="";
    //styleWidth=100;
    product:IProduct[];
    errorMessage:string;

    constructor(private _productService:ProductService){

    }


    toggleImage():void
    {
        this.showImage=!this.showImage;
    }


    ngOnInit():void{
        this._productService.getProducts()
        .subscribe((data)=>this.product=data,
        (err)=>this.errorMessage=err)
         
    }

}