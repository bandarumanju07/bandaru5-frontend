import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { gql } from '@apollo/client/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

const CREATE_USER = gql`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      id
      name
      email
    }
  }
`;

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  name = '';
  email = '';
  password = '';
  gender = '';
  phone = '';
  city = '';
  state = '';
  country = '';

  successMessage = '';
  errorMessage = '';

  constructor(private apollo: Apollo) {}

  signup(form: NgForm) {
    if (form.invalid) {
      this.errorMessage = 'Please fill in all required fields correctly.';
      return;
    }

    this.successMessage = '';
    this.errorMessage = '';

    this.apollo
      .mutate({
        mutation: CREATE_USER,
        variables: {
          input: {
            name: this.name,
            email: this.email,
            password: this.password,
            gender: this.gender,
            phone: this.phone,
            city: this.city,
            state: this.state,
            country: this.country,
          },
        },
      })
      .subscribe(
        ({ data }) => {
          this.successMessage = 'User created successfully!';
          console.log('User created:', data);
          form.resetForm(); // Reset form after success
        },
        (error) => {
          this.errorMessage = 'Error creating user. Please try again.';
          console.error('Error:', error);
        }
      );
  }
}
