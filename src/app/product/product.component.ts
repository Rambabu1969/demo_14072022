import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products = [
    {"discount": "-33%", "image" : "product-1.png", "name" : "organic banana", "discount_price" : "$10.50", "original_price" : "$13.20"},
    {"discount": "-45%", "image" : "product-2.png", "name" : "organic tomato", "discount_price" : "$10.50", "original_price" : "$13.20"},
    {"discount": "-33%", "image" : "product-3.png", "name" : "organic banana", "discount_price" : "$10.50", "original_price" : "$13.20"},
    {"discount": "-33%", "image" : "product-4.png", "name" : "organic banana", "discount_price" : "$10.50", "original_price" : "$13.20"},
    {"discount": "-33%", "image" : "product-5.png", "name" : "organic banana", "discount_price" : "$10.50", "original_price" : "$13.20"},
    {"discount": "-33%", "image" : "product-6.png", "name" : "organic banana", "discount_price" : "$10.50", "original_price" : "$13.20"},
    {"discount": "-33%", "image" : "product-7.png", "name" : "organic banana", "discount_price" : "$10.50", "original_price" : "$13.20"},
    {"discount": "-33%", "image" : "product-8.png", "name" : "organic banana", "discount_price" : "$10.50", "original-price" : "$13.20"}
  ]
}
