import React, { Component } from 'react'
import { InfoConsumer } from '../components/context'
import './styleNews.css'

export default class News extends Component {


    render() {
        const { img, newsTitle, newsText} = this.props.item;
        return (
            <InfoConsumer>
                {value => (
                   <div className="card container mt-2 mb-5 p-3 card-news">
                        <div className="row mt-4">
                            <div className="col-md-4">
                                <img className="img-fluid" src={img} alt=""/>
                            </div>
                            <div className="col-md-8">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h1 id="readMore">{newsTitle}</h1>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <p>{newsText}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <button className="like"><i className="far fa-thumbs-up"></i></button>
                                    <button className="unlike"><i className="far fa-thumbs-down"></i></button>
                                </div>
                            </div>
                        </div>  
                   </div>  
                )}
            </InfoConsumer>
        )
    }
}