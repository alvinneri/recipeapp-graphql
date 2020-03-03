import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';

const client = new ApolloClient({
  uri: '/graphql'
});


class App extends Component {
  
  render() { 
    return ( 
      <ApolloProvider client={client}>
        <Router>
          <div className="container">
            <Route exact path='/' component={Dashboard} />
          </div>
        </Router>
      </ApolloProvider>
     );
  }
}
 
export default App;