import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { LocalStorageStoreService } from './local-storage-store.service';

@Injectable()
export class StoreService {

  constructor(private local: LocalStorageStoreService) { }

  getOne(resourse: string, id: number): Observable<any>{
    return of({});
  }

  getList(resourse: string, filters: object = {}): Observable<any[]>{
    const list = this.local.getList(resourse, filters);

    return of(list);
  }

  create(resourse: string, data: any): Observable<any>{
    return of({});
  }

}

