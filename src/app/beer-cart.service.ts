import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Beer } from './beer-list/Beer';

@Injectable({
  providedIn: 'root'
})

export class BeerCartService {

  private _cartList: Beer[] = [];

  cartList: BehaviorSubject<Beer[]> = new BehaviorSubject(this._cartList) ;
  
  constructor() { }

  addToCart(beer: Beer){
    let item = this._cartList.find((v1) => v1.name == beer.name)
    if(!item)
      this._cartList.push({ ... beer});
    else
      item.quantity += beer.quantity;
    this.cartList.next(this._cartList);
  }

  emptyCart(): void{
    this._cartList = [];
    this.cartList.next(this._cartList);
  }
}