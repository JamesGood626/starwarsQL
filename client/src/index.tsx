import ApolloClient from 'apollo-boost';
import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';


// /* tslint:disable:no-console */ console.log(data)

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql'
});

ReactDOM.render(
  <ApolloProvider client={ client }>
    <App />
  </ApolloProvider>
  , document.getElementById('root') as HTMLElement
);
registerServiceWorker();