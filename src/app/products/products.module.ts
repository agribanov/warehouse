import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsContainerComponent } from './products-container/products-container.component';
import { RouterModule } from '@angular/router';
import { ProductsService } from './products.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [ProductsService],
  declarations: [ProductsListComponent, ProductsContainerComponent]
})
export class ProductsModule { }
