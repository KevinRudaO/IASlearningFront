import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../product/product';
import { ProductService } from '../product/product.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  product:Product[]=[];
  
  public forms:FormGroup;

  constructor(public serviceProduct: ProductService, public routing: Router, private formbuilder:FormBuilder) { }

 ngOnInit(): void {


  this.forms= this.formbuilder.group({
    productId:[0,[Validators.required,Validators.min(1)]],
    name:['',[Validators.required,Validators.maxLength(100)]],
    description:['',[Validators.required,Validators.maxLength(280)]],
    basePrice:[0,[Validators.required,Validators.min(1)]],
    taxRate:['',[Validators.required, Validators.compose([Validators.min(0),Validators.max(1)])]],
    productStatus:['',[Validators.required]],
    inventoryQuantity:[0,Validators.min(1)]
  })

  }
  addProducts():any{

      const product = new Product();
      product.productId=this.forms.get('productId').value;
      product.name=this.forms.get('name').value;
      product.description=this.forms.get('description').value;
      product.basePrice=this.forms.get('basePrice').value;
      product.taxRate=this.forms.get('taxRate').value;
      product.productStatus=this.forms.get('productStatus').value;
      product.inventoryQuantity=this.forms.get('inventoryQuantity').value;
      
    this.serviceProduct.addProduct(product).subscribe(response=>{
      
      alert ("product added")
      location.reload()
    })
  }
 
  dashboard(){
    this.routing.navigate(['dashboard'])
  }
  inicio(){
    this.routing.navigate([''])
  }
  
}