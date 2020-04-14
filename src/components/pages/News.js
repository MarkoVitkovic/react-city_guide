import React, { Component } from 'react'
import { InfoConsumer } from '../context'
import NewsCard from '../NewsCard'
import Img from '../assets/site-image/news.jpeg'
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
                                    <h5 className="card-title">News Title <span class="badge badge-primary">New</span></h5>
                                    <p className="card-text">News Descrption</p>
                                    <a href="#readMore" className="btn btn-outline-primary">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-s-12">
                            <div className="card mb-2">
                                <img className="card-img-top" src="https://images.unsplash.com/photo-1495139948119-45f313b7fe0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/>
                                <div className="card-body">
                                    <h5 className="card-title">News Title <span class="badge badge-warning">Trending</span></h5>
                                    <p className="card-text">News Descrption</p>
                                    <a href="#readMore" className="btn btn-outline-primary">Read More</a>
                                </div>
                            </div>
                        </div>
                            <div className="col-md-4 col-sm-6 col-s-12">
                                <div className="card mb-2">
                                    <img className="card-img-top" src="https://images.unsplash.com/photo-1509044851713-f3f27a61968d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/>
                                    <div className="card-body">
                                        <h5 className="card-title">News Title</h5>
                                        <p className="card-text">News Descrption</p>
                                        <a href="#readMore" className="btn btn-outline-primary">Read More</a>
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
