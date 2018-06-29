import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { ProductComponent } from 'src/product/product.component';
import { ProductUpperPipe } from 'src/product/product.pipe';
import { AddValuePipe } from 'src/product/product.addValue.pipe';
import { ProductFilterPipe } from 'src/product/product-filter.pipe';
import { StarComponent } from 'src/star/star.component';
import { ProductService } from 'src/product/product.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductUpperPipe,
    AddValuePipe,
    ProductFilterPipe,
    StarComponent,
   
    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
