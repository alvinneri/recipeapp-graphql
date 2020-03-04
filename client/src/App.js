import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Hits from './components/Hits';
import Footer from './components/Footer';
import PORT from './config/config'


const client = new ApolloClient({
  uri: `/graphql`
});


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      q: '',
    }
  }

  onChangeInput = (e) => {
    this.setState({
      q : e.target.value
  })
  }

  onSubmitForm = (e) => {
    e.preventDefault();
  }

  
  render() { 
    
    return ( 
      <ApolloProvider client={client}>
        <Router>
          <div className="container">
            <h1 className="text-center mt-5 ">Search Recipe</h1>
            <form onSubmit={this.onSubmitForm} className="form-group mt-5">
                <div className="d-flex">
                <input className="form-control w-75 mx-auto" type="text" placeholder="Search a Dish" value={this.state.q} onChange={this.onChangeInput}/>
                <Link  to={`/food/${this.state.q}`} className="btn btn-secondary" >SEARCH</Link>
                
                </div>
              </form>
            {/* <Route exact path='/' component={Dashboard} /> */}
            <Route exact path="/food/:q" component={Hits} />
           
          </div>
          <Footer />
        </Router>
      </ApolloProvider>
     );
  }
}
 
export default App;