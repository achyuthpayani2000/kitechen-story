import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import MainComponent from './main/main.component';
import { AboutComponent } from './about/about.component';
import { FaqComponent } from './faq/faq.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ItemsComponent } from './items/items.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemAddComponent } from './item-add/item-add.component';
import { ItemUpdateComponent } from './item-update/item-update.component';
import { PaymentComponent } from './payment/payment.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    MainComponent,
    AboutComponent,
    FaqComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    PageNotFoundComponent,
    ItemsComponent,
    ItemDetailComponent,
    ItemAddComponent,
    ItemUpdateComponent,
    PaymentComponent,
    PasswordResetComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
