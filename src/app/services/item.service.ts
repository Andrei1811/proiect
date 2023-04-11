import { Injectable } from '@angular/core';
import {HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  readonly baseUrl = "https://localhost:44385/api/item/"
  constructor(public httpClient: HttpClient) { }

  getItems(): Observable<Item[]> {
    return this.httpClient.get(this.baseUrl+ "get") as Observable<Item>
  }

  getItemById(id: number): Observable<Item> {
    return this.httpClient.get(this.baseUrl+ "getItems/" + id) as Observable<Item>
  }
  createItem(item: Item): Observable<Item> {
    return this.httpClient.get(this.baseUrl+ "getItems/" , item) as Observable<Item>
  }
  delete(id: number): Observable<null> {
    return this.httpClient.get(this.baseUrl+ "delete/" + id) as Observable<null>
  }
  edit(item: Item): Observable<null> {
    return this.httpClient.get(this.baseUrl+ "edit/" + item.id, item) as Observable<null>
  }
}
