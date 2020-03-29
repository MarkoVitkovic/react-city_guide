import React, { Component } from 'react'
import { placeInfo, reviews, detailInfoHotels, news, foodInfo, detailInfoFood } from '../data';

const InfoContext = React.createContext();

class InfoProvider extends Component {

    state = {
        info: placeInfo,
        food: foodInfo,
        reviews: reviews,
        detailsInfoFood: detailInfoFood,
        detailInfoHotels: detailInfoHotels,
        news: news
    }

    render() {
        return (
           <InfoContext.Provider value={{
                    info: this.state.info,
                    food: this.state.food,
                    reviews: this.state.reviews,
                    maps: this.state.maps,
                    headerTitle: this.state.headerTitle,
                    headerSubTitle: this.state.headerSubTitle,
                    headerText: this.state.headerText,
                    detailInfoHotels: this.detailInfoHotels,
                    detailInfoFood: this.detailInfoFood,
                    news: this.state.news,
                    name: this.state.name,
                    avatar: this.state.avatar,
                    comment: this.state.comment
               }}>
               {this.props.children}
           </InfoContext.Provider>
        )
    }
}

const InfoConsumer = InfoContext.Consumer;

export {InfoProvider, InfoConsumer};
