import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../components/cart/order';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {
private url:string="http://localhost:8080/Order";

  constructor(private http:HttpClient) { }

  addOrder(order:Order){
    return this.http.post<Order>(this.url,order);
  }

}
