import React, { Component } from 'react'
import { placeInfo, reviews, detailInfoHotels, news, foodInfo, detailInfoFood } from '../data';

const InfoContext = React.createContext();

class InfoProvider extends Component {

    state = {
        info: placeInfo,
        food: foodInfo,
        reviews: reviews,
        detailInfoFood: detailInfoFood,
        detailInfoHotels: detailInfoHotels,
        news: news
    }
    getItem = id => {
        const item = this.state.info.find(item => item.id === id)
        return item;
    }
    getFood = id => {
        const item = this.state.food.find(item => item.id === id)
        return item;
    }
    
    handleDetailFood = id => {
        const item = this.getFood(id);
        this.setState(() => {
            return {detailInfoFood: item}
        })
    }
    handleDetailHotels = id => {
        const item = this.getItem(id);
        this.setState(() => {
            return {detailInfoHotels: item}
        })
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
                    detailInfoHotels: this.state.detailInfoHotels,
                    detailInfoFood: this.state.detailInfoFood,
                    news: this.state.news,
                    name: this.state.name,
                    avatar: this.state.avatar,
                    comment: this.state.comment,
                    handleDetailFood: this.handleDetailFood,
                    handleDetailHotels: this.handleDetailHotels
               }}>
               {this.props.children}
           </InfoContext.Provider>
        )
    }
}

const InfoConsumer = InfoContext.Consumer;

export {InfoProvider, InfoConsumer};
