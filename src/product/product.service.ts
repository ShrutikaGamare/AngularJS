//Dependency Injection for collecting data through API or database

import {Injectable} from '@angular/core'; //for service we import Injectable
import {IProduct} from './product.model';
import {Http,Response} from '@angular/http'; //import httpModule in apps
import {Observable} from 'rxjs/Observable';
//import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



@Injectable()

export class ProductService
{
    /* getProducts():IProduct[]{
        return [
            {
                "productId":1,
                "productName":"Leaf rake",
                "productCode":"GDN 001",
                "price":19.8,
                "imgUrl":"./assets/leaf-rake.jpg",
                "starrating":1.5
    
    
            },
            {
                "productId":2,
                "productName":"garden cart",
                "productCode":"GDN 002",
                "price":21,
                "imgUrl":"./assets/garden-cart.jpg",
                "starrating":2.9
    
            }, {
                "productId":3,
                "productName":"Exclusive Leaf rake",
                "productCode":"GDN 003",
                "price":89.8,
                "imgUrl":"./assets/leaf-rake.jpg",
                "starrating":3.9
    
    
            }
        ]
    } */


    private _productUrl="https://ngapi4.herokuapp.com/api/getProducts";

    constructor(private _http:Http)
    {

    }

    getProducts():Observable<IProduct[]>
    {
        return this._http.get(this._productUrl)
            .map((response:Response) => <IProduct[]>response.json())
            .catch(this.handleError)
    }

    private handleError(error:Response)
    {
        return Observable.throw(error.statusText);

        
    }
}