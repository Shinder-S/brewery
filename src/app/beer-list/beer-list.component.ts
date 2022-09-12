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
      clearence: false
    },
    {
      name: "Fuller's",
      type: "Porter",
      price: 550,
      stock: 1000,
      image: "assets/img/fuller.jpg",
      clearence: true
    },
    {
      name: "Hobgoblin",
      type: "Indian Pale Ale",
      price: 650,
      stock: 1200,
      image: "assets/img/hobgoblin.jpg",
      clearence: false
    },
    {
      name: "Kilkenny IRISH RED ALE ",
      type: "Irish Red Ale",
      price: 550,
      stock: 700,
      image: "assets/img/kilkenny.jpg",
      clearence: false
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
