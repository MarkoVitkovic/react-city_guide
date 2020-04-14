import React, { Component } from 'react'
import { InfoConsumer } from '../context'
import NewsCard from '../NewsCard'
import Img from '../assets/chelsea.jpeg'
import Img2 from '../assets/grave.jpeg'
import Img3 from '../assets/corona.jpeg'
import '../styleNews.css'


export default class News extends Component {
    render() {
        return (
            <div>
                <div className="news">
                </div>
                <div className="news-text">
                    <h1>News and Recent articles</h1>
                    <div /> 
                </div>
                <div className="container pt-5 mt-5 mb-5">
                    <div className="row">
                        <div className="col-md-4 col-sm-6 col-s-12">
                            <div className="card mb-2">
                                <img className="card-img-top" src={Img} alt=""/>
                                <div className="card-body">
                                    <h5 className="card-title">Football <span class="badge badge-primary">New</span></h5>
                                    <p className="card-text">Chelsea stars were in tears. </p>
                                    <a href="#readMore" className="btn btn-outline-primary">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-s-12">
                            <div className="card mb-2">
                                <img className="card-img-top" src={Img2} alt=""/>
                                <div className="card-body">
                                    <h5 className="card-title">News <span class="badge badge-warning">Trending</span></h5>
                                    <p className="card-text">Mass grave dug in London. </p>
                                    <a href="#readMore" className="btn btn-outline-primary">Read More</a>
                                </div>
                            </div>
                        </div>
                            <div className="col-md-4 col-sm-6 col-s-12">
                                <div className="card mb-2">
                                    <img className="card-img-top" src={Img3} alt=""/>
                                    <div className="card-body">
                                        <h5 className="card-title">Covid19 <span class="badge badge-danger">Breaking</span></h5>
                                        <p className="card-text">Covid Tracker</p>
                                        <a href="https://covid19-dashb.netlify.com/" className="btn btn-outline-primary">See update</a>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                <InfoConsumer>
                {value => {
                    return value.news.map(item => {
                        return <NewsCard key={item.id} item={item}></NewsCard>;
                    })
                }}
                </InfoConsumer>
            </div>
        )
    }
}
