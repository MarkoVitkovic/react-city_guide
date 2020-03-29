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
                    <section id="card" className="pb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-6 col-md-4">
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
                                                    <Link to="/" className="button-card">
                                                        Details
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                     </div>
            </section>
                )}
            </InfoConsumer>
        )
    }
}
