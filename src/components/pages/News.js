import React, { Component } from 'react'
import { InfoConsumer } from '../context'
import NewsCard from '../NewsCard'



export default class News extends Component {
    render() {
        return (
            <div>
            <div className="news">
                <h1>News and Recent articles</h1>
                <div />
            </div>
            <InfoConsumer>
               {value => {
                   return value.news.map(item => {
                       return <NewsCard key={item.id} item={item}></NewsCard>;
                   })
               }}
            </InfoConsumer>
            </div>
        )
    }
}
