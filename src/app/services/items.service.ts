import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Item } from '../interfaces/items/item'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private readonly URL_HOST: string = 'http://localhost:3000'

  constructor(
    private readonly http: HttpClient,
  ) {}

  public getItems(params: Partial<Item>): Observable<Array<Item>> {
    return this.http.get<Array<Item>>(`${this.URL_HOST}/items`, { params })
  }

  public getItem(id: string): Observable<Item> {
    return this.http.get<Item>(`${this.URL_HOST}/items/${id}`)
  }

  public createItem(item: Item): Observable<Item> {
    return this.http.post<Item>(`${this.URL_HOST}/items`, item)
  }
}
