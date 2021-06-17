import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { ProductComponent } from './components/product/product.component';

const routes: Routes = [{path:"dashboard",component:DashboardComponent},
{path:'',component:ProductComponent},{path:'cart',component:CartComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
