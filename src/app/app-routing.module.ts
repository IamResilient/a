import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderCheckoutComponent } from './order-checkout/order-checkout.component';

const routes: Routes = [
  { path: '', redirectTo: '/order-checkout', pathMatch: 'full'},
  { path: 'order-checkout', component: OrderCheckoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
