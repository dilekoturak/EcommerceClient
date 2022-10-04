import { HomeModule } from './home/home.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductModule } from './product/product.module';
import { BasketModule } from './basket/basket.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductModule,
    BasketModule,
    HomeModule
  ]
})
export class ComponentsModule { }
