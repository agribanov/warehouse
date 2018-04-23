import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageStoreService {

  constructor() { }

  getList(collectionName: string, filters: object): any[]{
    const collection = this.getcollection(collectionName);

    return Object.values(collection);
  }

  getcollection(collectionName: string){
    const collectionString = localStorage.getItem(collectionName) || '{}';
    return JSON.parse(collectionString);
  }

}
