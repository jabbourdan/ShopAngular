import { Component, EventEmitter, Output } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  imports: [NgFor]
})
export class ProductListComponent {
  @Output() productAdded = new EventEmitter<any>(); // ✅ Send selected product to parent

  products = [
    { name: 'Mug', price: 30, image: 'https://media.istockphoto.com/id/1414016924/photo/white-mockup-mug-with-copy-space-and-houseplant-at-the-background.jpg?s=612x612&w=0&k=20&c=2CCGUMWlr3yJrHGtYAo1ZDPChVfoWRZtAmD9qhwjPko=' },
    { name: 'Shoes', price: 90, image: 'https://media.istockphoto.com/id/1350560575/photo/pair-of-blue-running-sneakers-on-white-background-isolated.jpg?s=612x612&w=0&k=20&c=A3w_a9q3Gz-tWkQL6K00xu7UHdN5LLZefzPDp-wNkSU=' },
    { name: 'Phone Case', price: 12, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ9yTDLbXBO9leCRcs9qSZTwX8E1Hy5GPicQ&s' }
  ];

  addToCart(product: any) {
    this.productAdded.emit(product); // ✅ Emit product to parent (app.component)
  }
}
