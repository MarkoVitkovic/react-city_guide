import React, { Component } from 'react'
import {InfoConsumer} from '../components/context'
import {Link} from 'react-router-dom'

export default class Info extends Component {
    render() {
        const {
            headerTitle, 
            headerSubTitle,
            img,
            headerText
        } = this.props.item;
        return (
            <InfoConsumer>
            {data => (
                <div id="card" className="pb-5 col-3">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="image-flip" onTouchStart="this.classList.toggle('hover');">
                                    <div className="frontside">
                                        <div className="card">
                                            <div className="card-body text-center">
                                                <p><img className=" img-fluid" src={img} alt={headerTitle}/></p>
                                                <h4 className="card-title">{headerTitle}</h4>
                                                <p className="card-text">{headerSubTitle}</p>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="backside">
                                        <div className="card">
                                            <div className="card-body text-center mt-4">
                                                <h4 className="card-title">{headerTitle}</h4>
                                                <p className="card-text">{headerText}</p>
                                                <Link to="/details" className="button-card">
                                                    Details
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                 </div>
        </div>
            )}
        </InfoConsumer>
        )
    }
}