import React, { Component } from 'react'
import { InfoConsumer } from '../context'
import Reviews from '../Reviews'

export default class DetailsNightlife extends Component {
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
                        maps,
                        description
                    } = data.detailInfoNightlife;

                    return(
                    <>
                    </>
                        )}
                    }
                        
            </InfoConsumer>
        )
    }
}
   