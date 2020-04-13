import React, { Component } from 'react'
import {InfoConsumer} from '../context'
import Info from '../NightlifeInfo';

export default class Nightlife extends Component {
    render() {
        return (
            <div>
                <div className="nightlife">
                </div>
                <div className="nightlife-text">
                    <h1>Nightlife</h1>
                    <div/>
                </div>
                <div className="container pt-5 pb-5">            
                <InfoConsumer>
                {
                    value => {return value.nightlife.map(item => {
                        return <Info key={item.id} item={item} />
                    })}
                }
                </InfoConsumer>
                </div>
            </div>
            
        )
    }
}
