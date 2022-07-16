import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  url:string = "http://localhost:8080/products";

  GetProducts(): Observable<any> {

    console.log(this.url);
    return this.http.get<any>(this.url)

  }

}