import React, { Component } from 'react'
import Video from '../assets/site-image/jeep.mp4'

export default class Home_animation extends Component {
    render() {
        return (
            <header>
                <div class="overlay"></div>
                    <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                        <source src={Video} type="video/mp4"/>
                    </video>
                    <div class="container h-100 inner">
                        <div class="d-flex h-100 text-center align-items-center">
                                <div class="w-100 text-white">
                                <h1 class="display-2 font-weight-bold">Nova Gradiska</h1>
                                <p class="lead mb-0">The man who wants to leave the city where he lives is not happy!</p>
                                <button class="btn btn-light">Slide up</button>
                                </div>
                        </div>
                    </div>
          </header>
        )
    }
}
