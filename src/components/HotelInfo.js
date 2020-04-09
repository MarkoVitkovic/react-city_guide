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
                <section class="section-tours">
                    <div class="row">
                    <div class="col-lg-4 mb-4">
                        <div class="my-flip-container">
                            <div class="my-flip-inner my-flip-right">
                                <div class="my-flip-inner-wrapper">
                                <div class="my-flip-side my-flip-front">
                                    <div class="my-flip-image my-flip-image--1">
                                        <img src={img}/>                                 
                                    </div>
                                    <div class="my-flip-details">
                                        <h4 class="my-flip-heading">
                                            {headerTitle}
                                        </h4>
                                        <div class="my-flip-text">
                                            <p>{headerText}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="my-flip-side my-flip-back my-flip-back-1">
                                    <div class="my-flip-back-inner">
                                        <div class="my-flip-price">
                                            <h3>{price}</h3>
                                        </div>
                                        <div class="my-flip-back-text">
                                            <ul>
                                            <li>{headerTitle}</li>
                                            <li>{headerSubTitle}</li>
                                            <li>{address}</li>
                                            <li>{email}</li>
                                            <li>{phone}</li>
                                            </ul>
                                        </div>
                                        <div class="my-flip-btn-box">
                                            <Link onClick={() => value.handleDetailHotels(id)} to="/details" className="my-flip-btn">
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
