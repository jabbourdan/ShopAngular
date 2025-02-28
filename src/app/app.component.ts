import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { ProductListComponent } from './components/product-list/product-list.component';
import { ShoppingBagComponent } from "./components/shopping-bag/shopping-bag.component";


@Component({
  selector: 'app-root',
  imports: [HeaderComponent, SidebarComponent, ProductListComponent, ShoppingBagComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'shopbag-app';
  shoppingBag: any[] = [];

  addToBag(product: any) {
    this.shoppingBag.push(product);
  }
}
