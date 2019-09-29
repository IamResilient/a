import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderCheckoutComponent } from './order-checkout/order-checkout.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: '', redirectTo: '/order-checkout', pathMatch: 'full'},
  { path: 'cart', component: CartComponent },
  { path: 'order-checkout', component: OrderCheckoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
