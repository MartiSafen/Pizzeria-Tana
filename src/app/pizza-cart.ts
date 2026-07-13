import { Injectable } from '@angular/core';
import { Pizza } from './pizza-list/pizza';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PizzaCartService{

  //maneja la logica del carrito de compras, como agregar pizzas, eliminar pizzas, calcular el total, etc.
 
    constructor() {}
    private _cartList: Pizza[] = [];
    cartList : BehaviorSubject<Pizza[]> = new BehaviorSubject<Pizza[]>([]);

  addToCart(pizza: Pizza): void{
    let item = this._cartList.find((v1) => v1.name === pizza.name) ;
    if (!item) {
      this._cartList.push( {...pizza} );
    }
    else {
      item.quantity += pizza.quantity;
    }
    console.log(this._cartList);
    this.cartList.next(this._cartList);
    }
}
