import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideApollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache, ApolloClientOptions } from '@apollo/client/core';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { inject } from '@angular/core';

const uri = 'http://localhost:4000/graphql'; // Replace with your GraphQL server

export function createApollo(): ApolloClientOptions<any> {
  const httpLink = inject(HttpLink); // Use Angular's inject function
  return {
    cache: new InMemoryCache(),
    link: httpLink.create({ uri }),
  };
}

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptorsFromDi()), // Optional if you use interceptors
    provideApollo(createApollo),
  ],
});
