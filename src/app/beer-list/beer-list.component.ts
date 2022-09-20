import { Component, OnInit } from '@angular/core';
import { Beer } from './beer';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {
    beers: Beer [] = [
    {
      name: "Amstel",
      type: "Lager",
      price: 450,
      stock: 0,
      image: "assets/img/amstel.jpg",
      clearence: false,
      quantity: 0,
    },
    {
      name: "Fuller's",
      type: "Porter",
      price: 550,
      stock: 2,
      image: "assets/img/fuller.jpg",
      clearence: true,
      quantity: 0,
    },
    {
      name: "Hobgoblin",
      type: "Indian Pale Ale",
      price: 650,
      stock: 3,
      image: "assets/img/hobgoblin.jpg",
      clearence: false,
      quantity: 0,
    },
    {
      name: "Kilkenny",
      type: "Irish Red Ale",
      price: 550,
      stock: 5,
      image: "assets/img/kilkenny.jpg",
      clearence: false,
      quantity: 0,
    },
  ]; 


  constructor() { }

  ngOnInit(): void {
  }

  downQuantity(beer: Beer): void{
    if(beer.quantity > 0)
      beer.quantity--;
  }

  upQuantity(beer: Beer): void{
    if(beer.quantity < beer.stock)
      beer.quantity++;
  }

  verifyBeerQuantity(beer: Beer): void{
    if(beer.quantity > beer.stock)
      alert("We ran out of stock. Sorry");
    if (beer.quantity < 0)
      alert("Cannot be ordered. We do not have stock to deliver");
  }
}
