import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { gql } from '@apollo/client/core';
import { FormsModule } from '@angular/forms';

const LOGIN_USER = gql`
  query LoginUser($email: String!, $password: String!) {
    user(email: $email, password: $password) {
      id
      name
      email
    }
  }
`;

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private apollo: Apollo) {}

  login() {
    this.apollo
      .watchQuery({
        query: LOGIN_USER,
        variables: {
          email: this.email,
          password: this.password,
        },
      })
      .valueChanges.subscribe(
        ({ data }: any) => {
          console.log('User logged in:', data);
        },
        (error) => {
          console.error('Login error:', error);
        }
      );
  }
}
