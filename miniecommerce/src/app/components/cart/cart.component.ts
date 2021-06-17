import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartserviceService } from 'src/app/service/cartservice.service';
import { Product } from '../product/product';
import { Order } from './order';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  arraypro:Array<any>=[];
  
  productName:String;
  totalPrice:number;

  value:number=0;
  discount:number=0;
  prodName:string="";
  price:number=0;
  public form:FormGroup;
  public img:string="https://www.pngkit.com/png/full/392-3923084_yamaha-fz-09-mt-09-akrapovic-exhaust-2018.png";
  constructor(public serviceCart: CartserviceService, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.productsCart();
    this.cartPrice();

    this.form=this.formBuilder.group({
      clientId:[0, [Validators.required, Validators.min(1)]],
      clientName:['',Validators.required]
    })
  }
  productsCart(){
    this.arraypro=JSON.parse(localStorage.getItem('productCart'));
  }

  addOrders():any{
    const order = new Order();
    
  
    order.clientId=this.form.get('clientId').value;
    this.prodName=this.arraypro[0]['name'];
    order.productName=this.prodName;
    order.clientName=this.form.get('clientName').value;
    order.totalPrice=this.price;

    this.serviceCart.addOrder(order).subscribe(response=>{
      
      alert ("Your order was paid!")
      localStorage.clear();
      this.discount=0;
      this.value=0;
      location.reload();
      
    })
  }
  cartPrice(){

    for(let i =0; i<this.arraypro.length;i++){
      this.value= this.value + this.arraypro[i]['basePrice'];
        if(this.arraypro.length>=3){
          this.discount= this.value -(this.value*0.1);
        }
    }
    if(this.arraypro.length>=3){
      this.price=this.discount;
    }else{
      this.price=this.value;
    }
    
  }
  deleteLocal(product:Product){
    let pro:Product[]=[];
    pro= JSON.parse(localStorage.getItem('productCart'));
      var i:number=0;

    // pro.forEach(element => {
       for(i=0;i<pro.length  ;i++){
      if(product.productId==pro[i]['productId']){
        pro.splice(i,1);
        
        localStorage.setItem('productCart',JSON.stringify(pro));
        location.reload();
       }
      
     }; 
    



  }

}
