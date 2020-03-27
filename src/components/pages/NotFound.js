import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class NotFound extends Component {
    render() {
        return (
            
            <div className="background">
                <div className="banner">
                    <h1>404</h1>
                    <div />
                    <p>page not found</p>
                    <Link to="/" className="button">
                        return home
                    </Link>
                
                </div>
           </div>
        )
    }
}
