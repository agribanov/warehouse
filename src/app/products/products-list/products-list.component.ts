import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Product } from '../models/Product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  list$: Observable<Product[]>

  constructor(private productsService:ProductsService) { }

  ngOnInit() {
    this.getList();
  }

  getList(){
    this.list$ = this.productsService.list();
  }

}
