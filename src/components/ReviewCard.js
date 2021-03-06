import React, { Component } from 'react'
import { InfoConsumer } from './context'

export default class ReviewCard extends Component {
    render() {
        const{
            name,
            avatar,
            comment
        } = this.props.person;
        return (
            <InfoConsumer>
                {data => (
                    <div className="card review-card media mt-3 p-3">
                        <img src={avatar} alt={name} className="mr-3" style={{width: '40px'}}/>
                        <div className="media-body">
                            <h5 className="mt-1">{name}</h5>
                            <p>{comment}</p>
                        </div>
                    </div>
                )}
            </InfoConsumer>
        )
    }
}
