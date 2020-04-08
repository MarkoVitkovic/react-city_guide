import React, { Component } from 'react'
import Strmac from '../assets/site-image/strmac.jpg'
import Cernik from '../assets/site-image/cernik.jpg'
import Ng from '../assets/site-image/ng.jpg'
import Park from '../assets/site-image/park.jpg'

export default class Highlights extends Component {
    render() {
        return (
            <div className="container highlights">
                <div>
                    <h1>Highlights in Nova Gradiska</h1>
                </div>        
                <div id="carousel-example-2" class="carousel slide carousel-fade" data-ride="carousel">
                
                    <ol class="carousel-indicators">
                        <li data-target="#carousel-example-2" data-slide-to="0" class="active"></li>
                        <li data-target="#carousel-example-2" data-slide-to="1"></li>
                        <li data-target="#carousel-example-2" data-slide-to="2"></li>
                        <li data-target="#carousel-example-2" data-slide-to="3"></li>
                    </ol>
                
                    <div class="carousel-inner" role="listbox">
                        <div class="carousel-item active">
                        <div class="view">
                            <img class="d-block w-100 car-img" src={Strmac} alt="First slide"/>
                            <div class="mask rgba-black-light"></div>
                        </div>
                        <div class="carousel-caption">
                            <h3 class="h3-responsive">Strmac</h3>
                            <p>Beautiful excursion</p>
                        </div>
                        </div>
                        <div class="carousel-item">
                        
                        <div class="view">
                            <img class="d-block w-100 car-img" src={Cernik} alt="Second slide"/>
                            <div class="mask rgba-black-strong"></div>
                        </div>
                        <div class="carousel-caption">
                            <h3 class="h3-responsive">Cernik</h3>
                            <p>Next village</p>
                        </div>
                        </div>
                        <div class="carousel-item">
                        
                        <div class="view">
                            <img class="d-block w-100 car-img" src={Ng} alt="Third slide"/>
                            <div class="mask rgba-black-slight"></div>
                        </div>
                        <div class="carousel-caption">
                            <h3 class="h3-responsive">High School Nova Gradiska</h3>
                            <p>High School in center</p>
                        </div>
                        </div>

                        <div class="carousel-item">

                        <div class="view">
                            <img class="d-block w-100 car-img" src={Park} alt="Fourth slide"/>
                            <div class="mask rgba-black-slight"></div>
                        </div>
                        <div class="carousel-caption">
                            <h3 class="h3-responsive">Central park</h3>
                            <p>Central Park in center of the city</p>
                        </div>
                        </div>
                    </div>
                
                    <a class="carousel-control-prev" href="#carousel-example-2" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carousel-example-2" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
   
        )
    }
}
