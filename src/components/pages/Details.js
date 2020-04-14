import React, { Component } from 'react'
import { InfoConsumer } from '../context'
import Reviews from '../Reviews'
import '../styleHotels.css'

export default class Details extends Component {
    render() {
        return (
            <InfoConsumer>
                {data =>{
                    const{
                        headerTitle,
                        img,
                        images,
                        maps,
                        price,
                        extras,
                        maxCapacity,
                        description
                    } = data.detailInfoHotels;

                    return(
                    <>
                        <div className="hotels-details">
                            <div className="title-hotels-main">
                                <h1>{headerTitle}</h1>
                                <div className="divred" />
                            </div>
                        </div>
                        <div className="container">
                            <div className="title-hotels">
                                <h1>Good Night</h1>
                                <div className="divred" />
                                <img src={img} alt="img" className="detail-hotels-image"/>
                                <div className="hotels-single-images">
                                    {images.map((item, index) => {return <img key={index} src={item} alt=""/>})}
                                </div>
                            </div>
                            <section className="about-place">
                                            <div className="about-place-info">
                                            <article className="details text-left">
                                                <h3>Details</h3>
                                                <p>{description}</p>
                                            </article>
                                            <article className="info text-left">
                                                <h3>Info</h3>
                                                <h6>price : {price}</h6>
                                                <h6>max capacity : {maxCapacity} </h6>
                                            </article>
                                            </div>       
                            </section>
                            <section className="main-extras">
                                            <h3 className="text-left">Extras</h3>
                                            <ul className="extras text-left">
                                            {extras.map((item,index) => {return <li key={index}>- {item}</li>})}
                                            </ul>
                            </section>
                            <div className="map-rev">
                            <div className="mt-5">
                                <h3>Map</h3>
                                <iframe title="map" src={maps} style={{border: '0',height:'28.125rem',width: '100%', frameborder: '0' }}/>
                            </div>
                            <div className="mt-5">
                                <h3>Reviews</h3>
                                <Reviews/>
                            </div>
                           </div> 
                        </div>
                    </>
                        )}
                    }
                        
            </InfoConsumer>
    
        )
    }
}
