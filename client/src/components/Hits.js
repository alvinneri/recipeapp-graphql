import React, { Component , Fragment} from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { useQuery } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';
import HitItems from './HitsItem';
import '../css/HitsItem.css';


const FOOD_QUERY = gql`
  query FoodQuery($q: String!) {
    food(q: $q) {
      q,
      hits{
        recipe{
          uri,
          label,
          image,
          ingredients{
            text
          }
        }
      }
    }
  }
`;

class Hits extends Component {
    
    render() { 
        let { q } = this.props.match.params;
        console.log(q)

        return ( 
            <Fragment>
            <Query query={FOOD_QUERY} variables={{ q }}>
            {({ loading, error, data }) =>  {
            if (loading) return (<div className="loadercenter">
                                 <i className="fa fa-cog fa-spin fa-5x" />
                                 </div>
          )
            if (error) console.log(error);
            
            
            let food = data.food.hits
            let recipe = {}
            console.log(food)
            food.map(foods => (
                console.log(foods.recipe.label)
            ))


            return(
                <div>
                  {food.map( foods => (
                      
                      <HitItems key={foods.recipe.uri} label={foods.recipe.label} image={foods.recipe.image} ingredients={foods.recipe.ingredients} />
                  ))}
                </div>
            )
            }}
            </Query>   
            </Fragment>
         );
    }
}
 
export default Hits;