import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product/product';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  Product:Product[]=[];
  dato: void;
  Productv:Product[]=[];
  constructor(public serviceProduct: ProductService,public router:Router) { }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(){
    this.serviceProduct.getProduct().subscribe(response=>{
      this.Product=response.items
      
    })
  }

  getproductId(product:Product){
    
    this.serviceProduct.getProductById(product.productId).subscribe(response=>{
      this.Productv=response.items;
    })
  }

  deleteProducts(productId:number){
    this.serviceProduct.deleteProduct(productId).subscribe(response =>{
      
      alert ("Product successfully removed")
      location.reload()
    })
  }
  
  updateProducts(product:Product){
    this.serviceProduct.updateProduct(product).subscribe(response =>{
      alert("product edited")
      location.reload()
    })
  }

}
