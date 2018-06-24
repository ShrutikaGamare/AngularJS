import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductComponent } from 'src/product/product.component';
import { ProductUpperPipe } from 'src/product/product.pipe';
import { AddValuePipe } from 'src/product/product.addValue.pipe';
import { ProductFilterPipe } from 'src/product/product-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductUpperPipe,
    AddValuePipe,
    ProductFilterPipe
    ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
