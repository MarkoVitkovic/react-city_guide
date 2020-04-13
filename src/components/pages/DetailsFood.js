import React, { Component } from 'react'
import { InfoConsumer } from '../context'
import Reviews from '../Reviews'

export default class DetailsFood extends Component {
    render() {
        return (
            <InfoConsumer>
                {data =>{
                    const{
                        headerTitle,
                        headerSubTitle,
                        headerText,
                        img,
                        title,
                        images,
                        maps,
                        description
                    } = data.detailInfoFood;

                    return(
                    <>
                        <div className="container">
                            <div className="title-food">
                                <h1>{headerTitle}</h1>
                                <div className="spliter-details"/>
                                <h4>{headerSubTitle}</h4>
                                <h5>{headerText}</h5>
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
                                                <h6>price : 56</h6>
                                                <h6>max capacity : 10 </h6>
                                            </article>
                                            </div>
                                            <section className="main-extras">
                                            <h3 className="text-left">Extras</h3>
                                            <ul className="extras text-left">
                                            lalala
                                            </ul>
                                        </section>
                                            
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
            
            
                           
