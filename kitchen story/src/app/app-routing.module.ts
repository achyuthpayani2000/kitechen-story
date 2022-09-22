import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { ItemAddComponent } from './item-add/item-add.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemUpdateComponent } from './item-update/item-update.component';
import { ItemsComponent } from './items/items.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { PaymentComponent } from './payment/payment.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './services/auth.service';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'items', component: ItemsComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'item-detail/:id', component: ItemDetailComponent },
  { path: 'item-update/:id', component: ItemUpdateComponent },
  { path: 'item-add', component: ItemAddComponent },

  { path: 'pay', component: PaymentComponent },
  { path: "password-reset", component: PasswordResetComponent },
  { path: 'cart', component: CartComponent }
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
