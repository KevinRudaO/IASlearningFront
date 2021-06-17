import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headerproduct',
  templateUrl: './headerproduct.component.html',
  styleUrls: ['./headerproduct.component.css']
})
export class HeaderproductComponent implements OnInit {

  constructor(public routing:Router) { }

  ngOnInit(): void {
  }
  dashboard(){
    this.routing.navigate(['dashboard'])
  }
  inicio(){
    this.routing.navigate([''])
  }
  cart(){
    this.routing.navigate(['cart']);
  }
}
