import React, { Component } from 'react'
import { InfoConsumer } from '../components/context'
import './styleNews.css'

export default class News extends Component {
    constructor(){
        super();

        this.state = {
           clickedLike: true,
           clickedUnlike: true
        }
    }
    changeColor(){
        this.setState({clickedLike: !this.state.clickedLike})
     }
     changeColorUnlike(){
        this.setState({clickedUnlike: !this.state.clickedUnlike})
     }

    render() {
        const { img, newsTitle, newsText} = this.props.item;
        let btn_class_like = this.state.clickedLike ? "like" : "clicked";
        let btn_class_unlike = this.state.clickedUnlike ? "like" : "clicked";
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
                                    <button className={btn_class_like}  onClick={this.changeColor.bind(this)}><i className="far fa-thumbs-up"></i></button>
                                    <button className={btn_class_unlike}  onClick={this.changeColorUnlike.bind(this)}><i className="far fa-thumbs-down"></i></button>
                                </div>
                            </div>
                        </div>  
                   </div>  
                )}
            </InfoConsumer>
        )
    }
}