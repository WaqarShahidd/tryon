import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AvatarComponent } from './avatar/avatar.component';
import { WebcamModule } from 'ngx-webcam';
import { CartComponent } from './cart/cart.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CheckoutComponent } from './checkout/checkout.component'; // Import the WebcamModule

@NgModule({
  declarations: [AppComponent, ProductDetailComponent, AvatarComponent, CartComponent, NavbarComponent, CheckoutComponent],
  imports: [BrowserModule, AppRoutingModule, WebcamModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
