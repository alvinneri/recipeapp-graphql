import React, { Component } from 'react';
import '../css/HitsItem.css'

class Footer extends Component {
    
    render() { 
        return ( 
            <div id="footer">
                <div class="card">
                    <div class="card-header text-center">
                        &copy; Alvin Neri 2020
                    </div>
                    <div class="card-body text-center">
                        <blockquote class="blockquote mb-0">
                        <p>Visit my portfolio in this <a href="http://thebeardedbull.herokuapp.com" target="_blank">link</a></p>
                        <footer class="blockquote-footer">Everyday is a learning process<cite title="Source Title"> (Alvin Neri)</cite></footer>
                        </blockquote>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Footer;