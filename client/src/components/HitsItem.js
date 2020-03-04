import React from 'react';
import { Link } from 'react-router-dom';
import '../css/HitsItem.css';

function HitItems(props){



    return (
        <div className="card bg-light mb-3">
            <div class="card-header">{props.label}</div>
            <div class="card-body">
                <div className="row">
                <div className='text-center' id="Image"><img src={props.image} alt=""/></div>
                <div className="mx-left mt-2 ml-2">
                    <h5>Ingredients:</h5>
                    <ul>
                    {
                        props.ingredients.map( ing => (
                            <li>{ing.text}</li>
                        ))
                    }
                    </ul>

                </div>
                </div>
            </div>    
        </div>
    )


}



export default HitItems;