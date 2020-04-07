import React, { Component } from 'react'
import Video from '../assets/site-image/view.mp4'

export default class SkyView extends Component {
    render() {
        return (
            <div className="container">
                <video controls playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop" className="video">
                    <source src={Video} type="video/mp4" />
                </video>
                <div className="videoText">
                     <h1>From the Sky</h1>
                     <p>If we want to discover the soul of the city, we need to follow the track of time - the trail of its old buildings and monuments… So, 
                         let's take a walk in the streets and squares of Nova Gradiska and listen to the pulse of life in it…
                         </p>
                </div>
               
            </div>
            
        )
    }
}
