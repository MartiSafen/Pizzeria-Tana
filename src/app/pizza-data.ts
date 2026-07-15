import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Pizza } from './pizza-list/pizza';
const URL= 'https://6a565c2eb17de7bebbde2ff7.mockapi.io/api/v1/pizza';
@Injectable({
  providedIn: 'root',
})
export class PizzaData {
  constructor(private http: HttpClient) {}


  public getAll(): Observable<Pizza[]> {
    return this.http.get<Pizza[]>(URL).pipe(
      tap((pizzas: Pizza[]) => {
        pizzas.forEach(pizza => {
          pizza.quantity = 0;
        });
      })
    );
  }
    public deletePizza(id: number | string): Observable<Pizza []> {
    return this.http.delete<Pizza[]>(`${URL}/${id}`);
  }
}
