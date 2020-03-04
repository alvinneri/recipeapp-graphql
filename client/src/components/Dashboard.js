import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Dashboard extends Component {

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

    render() { 
      let { q } = this.props.match.params;

        return ( 
            <div className='container-fluid mt-5'>
              <form action="" className="form-group">
                <div className="d-flex">
                <input className="form-control w-75 mx-auto" type="text" placeholder="Search a Dish" value={this.state.q} onChange={this.onChangeInput}/>
                <Link  to={`/food/${this.state.q}`} className="btn btn-secondary" >SEARCH</Link>
                
                </div>
              </form>
          </div> 
         );
    }
}
 
export default Dashboard;