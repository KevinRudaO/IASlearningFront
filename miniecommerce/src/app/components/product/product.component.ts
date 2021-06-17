import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
Product:Product[]=[];
public img:string="https://www.pngkit.com/png/full/392-3923084_yamaha-fz-09-mt-09-akrapovic-exhaust-2018.png";
  constructor(public serviceProduct: ProductService) { }

  ngOnInit(): void {
    this.getProducts();

  }
getProducts(){
  this.serviceProduct.getProduct().subscribe(response=>{
    
     this.Product=response.items
    
  })
} 

addCart(product:Product){
  let arrayProduct:Product[]=[];
  if(localStorage.getItem('productCart')===null){
    arrayProduct.push(product);
    localStorage.setItem('productCart',JSON.stringify(arrayProduct))
  }else{
    arrayProduct= JSON.parse(localStorage.getItem('productCart') || '{}')
    arrayProduct.push(product);
    localStorage.setItem('productCart',JSON.stringify(arrayProduct))
  }
  

}




}
