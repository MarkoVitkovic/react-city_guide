import React, { Component } from 'react'
import { InfoConsumer } from '../context'
import styled from 'styled-components'
import Reviews from '../Reviews'

export default class Details extends Component {
    render() {
        return (
            <InfoConsumer>
                {data =>{
                    const{
                        id,
                        headerTitle,
                        headerSubTitle,
                        headerText,
                        img,
                        title,
                        maps,
                        description,
                        extras, 
                        maxCapacity,
                        price
                    } = data.detailInfoHotels;

                    return(
                        <>
                        <DetailsStyle className="container-fluid align-items-center">
                            <h1 className="display-1 font-weight-bold">{headerTitle}</h1> 
                            <h4 className="display-5">{headerSubTitle}</h4>
                            <p>{headerText}</p>
                            {/*icons*/}
                            < div className="container mt-5">
                                <div className="row justify-content-center">
                                    <div className="col-2">
                                       <i className="fab fa-facebook"/> 
                                    </div>
                                    <div className="col-2">
                                        <i className="fab fa-twitter"></i> 
                                    </div>
                                    <div className="col-2">
                                    <   i className="fab fa-instagram"></i> 
                                    </div>
                                    <div className="col-2">
                                       <i className="fab fa-facebook-messenger"/> 
                                    </div>
                                </div>
                            </ div>
                        </DetailsStyle>
                            {/*links*/}
                            <div className="container">
                                <ul className="nav nav-tabs">
                                     {/* about place link */}
                                    <li className="nav-item">
                                      <a href="#aboutPlace" className="nav-link active text-dark" role="tab" data-toggle="tab">About Place</a>  
                                    </li>
                                     {/* reviews link */}
                                     <li className="nav-item">
                                      <a href="#reviews" className="nav-link text-dark" role="tab" data-toggle="tab">Reviews</a>  
                                    </li>
                                     {/* map link */}
                                     <li className="nav-item">
                                      <a href="#map" className="nav-link text-dark" role="tab" data-toggle="tab">Map</a>  
                                    </li>
                                </ul>
                                {/*tab*/}
                                <div className="tab-content mb-5">
                                   {/*About Place tab*/}
                                   <div className="tab-pane in active text-center mt-5" role="tabpanel" id="aboutPlace">
                                        <h2 className="mb-5">{title}</h2>
                                        <img src={img} alt={title} className="img-thumbnail img-fluid mb-5" style={{border:'none'}}/>
                                        <section className="about-place">
                                            <div className="about-place-info">
                                            <article className="details text-left">
                                                <h3>details</h3>
                                                <p>{description}</p>
                                            </article>
                                            <article className="info text-left">
                                                <h3>info</h3>
                                                <h6>price : {price}</h6>
                                                <h6>max capacity : {maxCapacity} </h6>
                                                <h6></h6>
                                                <h6></h6>
                                            </article>
                                            </div>
                                        </section>
                                        <section className="main-extras">
                                            <h6 className="text-left">extras</h6>
                                            <ul className="extras text-left">
                                            {extras.map((item,index) => {return <li key={index}>- {item}</li>})}
                                            </ul>
                                        </section>
                                   </div>
                                   {/*reviews */}
                                   <div className="tab-pane mt-5" role="tabpanel" id="reviews">
                                        <Reviews/>
                                   </div>
                                    {/*Map*/}
                                    <div className="tab-pane mt-5" role="tabpanel" id="map">
                                       <iframe src={maps} style={{border: '0',height:'28.125rem',width: '100%', frameborder: '0' }}/>
                                   </div>
                                </div>
                            </div>
                        </>
                    );
                }}
            </InfoConsumer>
        )
    }
}

const DetailsStyle = styled.header`
background: linear-gradient(#6D6D6D,#FFFFFF);
height: 70vh;
text-transform: uppercase;
color: #5F5F5F;
text-align: center;

h1{
    padding-top:10%;
    color: #5F5F5F;
}
h4{
    color: #5F5F5F;
}
p {
    padding-left: 10%;
    padding-right: 10%;
    margin-bottom: 10%
    color: #5F5F5F;
}
i {
    font-size:1.8rem;
    color: #5F5F5F;
}
i:hover{
    color:black;
    cursor: pointer;
}
.nav-item{
    height: 18.75rem;
}
@media(max-width: 760px){

}
`
