import { Component, OnInit } from '@angular/core';

import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(
    private productService:ProductService
  ) { }

  ngOnInit(): void {
    this.GetProducts();
  }

  products = [
    {
      "ImageName" : "product-1.png", 
      "Name" : "organic banana",
      "OriginalPrice": 10,
      "DiscountPrice": 8
    }
  ]

  GetProducts(){

    return this.productService.GetProducts().subscribe((response: {}) => {
      let data: any = response;
      console.log(data.data);

      this.products = data.data;

    });
  }

}
