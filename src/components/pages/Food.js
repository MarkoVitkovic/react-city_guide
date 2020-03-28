import React, { Component } from 'react';
import {Link} from 'react-router-dom';
export default class Food extends Component {
    render() {
        return (
                    <div>
                        <div className="food">
                        </div>
                        <div className="text-food">
                            <h1>Food and drink</h1>
                            <div />
                        </div>
                        <section id="card" class="pb-5">
                            <div class="container">
                                <div class="row">
                                    <div class="col-xs-12 col-sm-6 col-md-4">
                                        <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                                                <div class="frontside">
                                                    <div class="card">
                                                        <div class="card-body text-center">
                                                            <p><img class=" img-fluid" src="images/garaj.jpg" alt="card image"/></p>
                                                            <h4 class="card-title">Sunlimetech</h4>
                                                            <p class="card-text">This is basic card with image on top, title, description and button.</p>
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="backside">
                                                    <div class="card">
                                                        <div class="card-body text-center mt-4">
                                                            <h4 class="card-title">Sunlimetech</h4>
                                                            <p class="card-text">This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                
                                    <div class="col-xs-12 col-sm-6 col-md-4">
                                        <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                                            
                                                <div class="frontside">
                                                    <div class="card">
                                                        <div class="card-body text-center">
                                                            <p><img class=" img-fluid" src="images/pushkin.jpg" alt="card image"/></p>
                                                            <h4 class="card-title">Sunlimetech</h4>
                                                            <p class="card-text">This is basic card with image on top, title, description and button.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="backside">
                                                    <div class="card">
                                                        <div class="card-body text-center mt-4">
                                                            <h4 class="card-title">Sunlimetech</h4>
                                                            <p class="card-text">This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                
                                    <div class="col-xs-12 col-sm-6 col-md-4">
                                        <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                                                <div class="frontside">
                                                    <div class="card">
                                                        <div class="card-body text-center">
                                                            <p><img class=" img-fluid" src="images/mars.jpg" alt="card image"/></p>
                                                            <h4 class="card-title">Sunlimetech</h4>
                                                            <p class="card-text">This is basic card with image on top, title, description and button.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="backside">
                                                    <div class="card">
                                                        <div class="card-body text-center mt-4">
                                                            <h4 class="card-title">Sunlimetech</h4>
                                                            <p class="card-text">This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                    <div class="col-xs-12 col-sm-6 col-md-4">
                                        <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                                                <div class="frontside">
                                                    <div class="card">
                                                        <div class="card-body text-center">
                                                            <p><img class=" img-fluid" src="images/garaj2.jpg" alt="card image"/></p>
                                                            <h4 class="card-title">Sunlimetech</h4>
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="backside">
                                                    <div class="card">
                                                        <div class="card-body text-center mt-4">
                                                            <h4 class="card-title">Sunlimetech</h4>
                                                            <p class="card-text">top, titlfgzhujklčćž
                                                            lnlknlčknlknlćn, description and button.</p>
                                                            <Link to="/" className="button-card">
                                                            return home
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
        )
    }
}
