import { Component, Input } from '@angular/core';
import { NgFor ,NgIf} from '@angular/common';

@Component({
  selector: 'app-shopping-bag',
  standalone: true, 
  templateUrl: './shopping-bag.component.html',
  styleUrls: ['./shopping-bag.component.css'],
  imports: [NgFor,NgIf] 
})
export class ShoppingBagComponent {
  @Input() products: any[] = [];
  showItems = false;

  getTotalPrice() {
    return this.products.reduce((total, product) => total + product.price, 0);
  }

  toggleBag() {
    this.showItems = !this.showItems;
  }

}