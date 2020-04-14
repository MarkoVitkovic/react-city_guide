import React, { Component } from 'react'
import { InfoConsumer } from '../context'
import Reviews from '../Reviews'
import '../styleFood.css'

export default class DetailsFood extends Component {
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
                        breakfast,
                        maxCapacity,
                        rooms,
                        description
                    } = data.detailInfoFood;

                    return(
                    <>
                        <div className="food-details">
                            <div className="title-food-main">
                                <h1>{headerTitle}</h1>
                            </div>
                        </div>
                        <div className="container">
                            <div className="title-food">
                                <h1>Bon Appétit</h1>
                                <div className="divred" />
                                <img src={img} alt="img" className="detail-food-image"/>
                                <div className="food-single-images">
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
                                                <h6>rooms: {rooms}</h6>
                                                <h6>breakfast: {breakfast}</h6>
                                            </article>
                                            </div>       
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
            
            
                           
