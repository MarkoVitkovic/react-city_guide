import React, { Component } from 'react'
import {InfoConsumer} from '../components/context'
import {Link} from 'react-router-dom'
import './styleCard.css'

export default class Info extends Component {
    render() {
        const {
            id,
            headerTitle, 
            headerSubTitle,
            img,
            headerText,
            price,
            phone,
            email,
            address

        } = this.props.item;
        return (
            <InfoConsumer>
            {value => (
                <section className="section-tours">
                    <div className="row">
                    <div className="col-lg-4 mb-4">
                        <div className="my-flip-container">
                            <div className="my-flip-inner my-flip-right">
                                <div className="my-flip-inner-wrapper">
                                <div className="my-flip-side my-flip-front">
                                    <div className="my-flip-image my-flip-image--1">
                                        <img src={img} alt=""/>                                 
                                    </div>
                                    <div className="my-flip-details">
                                        <h4 className="my-flip-heading">
                                            {headerTitle}
                                        </h4>
                                        <div className="my-flip-text">
                                            <p>{headerText}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="my-flip-side my-flip-back my-flip-back-1">
                                    <div className="my-flip-back-inner">
                                        <div className="my-flip-price">
                                            <h3>{price}</h3>
                                        </div>
                                        <div className="my-flip-back-text">
                                            <ul>
                                            <li>{headerTitle}</li>
                                            <li>{headerSubTitle}</li>
                                            <li>{address}</li>
                                            <li>{email}</li>
                                            <li>{phone}</li>
                                            </ul>
                                        </div>
                                        <div className="my-flip-btn-box">
                                            <Link onClick={() => value.handleDetailHotels(id)} to="/detailshotels" className="my-flip-btn">
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
                </section>
       
            )}
        </InfoConsumer>
        )
    }
}
