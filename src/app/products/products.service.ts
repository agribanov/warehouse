import { Injectable } from '@angular/core';
import { StoreService } from '../app-common/store.service';
import { Product } from './models/Product';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductsService {

  constructor(private store: StoreService) { }

  list(): Observable<Product[]>{
    return this.store.getList('products');
  }

}
