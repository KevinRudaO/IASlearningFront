import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
private url:string="http://localhost:8080/Product";

  constructor(private http:HttpClient) { }

  getProduct():Observable<any>{
    return this.http.get<any>(this.url);
  }
  
  addProduct(product:Product){
     return this.http.post<Product>(this.url,product);
    }
  deleteProduct(productId:number){
      return this.http.delete(this.url+"/Product/"+productId);
  }
  getProductById(productId:number){
    return this.http.post<any>(this.url+"/getProductId",productId);
  }
  updateProduct(product:Product){
    return this.http.put<Product>(this.url+"/Product/",product);
  }
 

}
