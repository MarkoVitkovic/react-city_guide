import React, { Component } from 'react';
import {InfoConsumer} from '../context'
import Info from '../HotelInfo';

export default class Hotels extends Component {
    render() {
        return (
            <div>
                <div className="hotels">
                <h1>Amazing hotels and hostels</h1>
                <div />
                <p>We've pre-picked the best hotels, hostels and bed and breakfasts to <br/> make your stay as enjoyable as possible.</p>
                </div>            
                <InfoConsumer>
                {
                    value => {return value.info.map(item => {
                        return <Info key={item.id} item={item} />
                    })}
                }
                </InfoConsumer>
            </div>
        )
    }
}
