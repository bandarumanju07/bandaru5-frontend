import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cartItems: any[] = []; // Placeholder for cart logic

  constructor() {}

  removeItem(index: number) {
    this.cartItems.splice(index, 1);
  }
}
