import { ProductFormComponent } from './admin/product-form/product-form.component';
import { AdminAuthGuardService } from './admin-auth-guard.service';
import { AuthGuardService } from './auth-guard.service';

import { MyOrdersComponent } from './my-orders/my-orders.component';
import { HomeComponent } from './home/home.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { AdminProductsComponent } from './admin/products/products.component';
import { LoginComponent } from './login/login.component';
import { AdminOrdersComponent } from './admin/orders/orders.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductsComponent } from './products/products.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
   {path: '', component: HomeComponent},
   {path: 'products', component: ProductsComponent},
   {path: 'login', component: LoginComponent},
   {path: 'shopping-cart', component: ShoppingCartComponent},
   {path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGuardService]},
   {path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuardService]},
   {path: 'order-success', component: OrderSuccessComponent, canActivate: [AuthGuardService]},
   {path: 'admin/products', component: AdminProductsComponent, canActivate: [AuthGuardService, AdminAuthGuardService]},
   {path: 'admin/orders', component: AdminOrdersComponent, canActivate: [AuthGuardService, AdminAuthGuardService]},
   {path: 'admin/products/new', component:ProductFormComponent , canActivate: [AuthGuardService, AdminAuthGuardService]},
   {path: '**', component: HomeComponent }

 ];


@NgModule({
  imports: [HttpClientModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule {  }
