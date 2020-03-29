import React, { Component } from 'react';
import {InfoConsumer} from '../context'
import Info from '../FoodInfo';

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
                        <InfoConsumer>
                        {
                            value => {return value.food.map(item => {
                                return <Info key={item.id} item={item} />
                            })}
                        }
                        </InfoConsumer>
                    </div>
        )
    }
}
