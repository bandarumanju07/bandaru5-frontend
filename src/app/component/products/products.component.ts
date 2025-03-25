import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { gql } from '@apollo/client/core';
import { CommonModule } from '@angular/common';

const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      id
      name
      description
      price
      imageUrl
    }
  }
`;

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products: any[] = [];

  constructor(private apollo: Apollo) {
    this.fetchProducts();
  }

  fetchProducts() {
    this.apollo.watchQuery({ query: GET_PRODUCTS }).valueChanges.subscribe(
      ({ data }: any) => {
        this.products = data.products;
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }
}
