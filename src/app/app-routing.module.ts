import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { NewItemsComponent } from './new-items/new-items.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';
import { SaleComponent } from './sale/sale.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'TheMet',
    pathMatch: 'full'
  },
  {
    path: 'TheMet',
    component: HomeComponent 
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'new_items',
    component: NewItemsComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'sale',
    component: SaleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
