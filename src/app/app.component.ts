import { Component } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { CommonModule, NgForOf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NgForOf],
  template: `
    <h1>Users</h1>
    <ul>
      <li *ngFor="let user of users">
        {{ user.name }} - {{ user.email }} - {{ user.state }}
      </li>
    </ul>
  `,
})
export class AppComponent {
  users: any[] = [];

  constructor(private apollo: Apollo) {
    this.apollo
      .watchQuery({
        query: gql`
          query {
            users {
              name
              email
              state
            }
          }
        `,
      })
      .valueChanges.subscribe((result: any) => {
        this.users = result?.data?.users;
      });
  }
}
