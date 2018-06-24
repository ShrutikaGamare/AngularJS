import {Component} from '@angular/core';
import {IProduct} from './product.model';


@Component({
selector:'product-comp',
templateUrl:`./product.component.html`
})


export class ProductComponent
{
    title:string="ShrutikaGamare";
    showImage:boolean=false;
    filterData:string="";
    product:IProduct[]=[
        {
            "productId":1,
            "productName":"Leaf rake",
            "productCode":"GDN 001",
            "price":19.8,
            "imgUrl":"./assets/leaf-rake.jpg"

        },
        {
            "productId":2,
            "productName":"garden cart",
            "productCode":"GDN 002",
            "price":21,
            "imgUrl":"./assets/garden-cart.jpg"


        }
    ];

    toggleImage():void
    {
        this.showImage=!this.showImage;
    }

}