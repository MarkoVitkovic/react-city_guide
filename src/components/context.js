import React, { Component } from 'react'
import { placeInfo, reviews, detailInfoHotels, news, foodInfo, detailInfoFood, nightlifeInfo, detailInfoNightlife } from '../data';

const InfoContext = React.createContext();

class InfoProvider extends Component {

    state = {
        info: placeInfo,
        food: foodInfo,
        nightlife: nightlifeInfo, 
        reviews: reviews,
        detailInfoFood: detailInfoFood,
        detailInfoHotels: detailInfoHotels,
        detailInfoNightlife: detailInfoNightlife,
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
    getNightlife = id => {
        const item = this.state.nightlife.find(item => item.id === id)
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
    handleDetailNightlife = id => {
        const item = this.getNightlife(id);
        this.setState(() => {
            return {detailInfoNightlife: item}
        })
    }

    render() {
        return (
           <InfoContext.Provider value={{
                    info: this.state.info,
                    food: this.state.food,
                    nightlife: this.state.nightlife,
                    detailInfoHotels: this.state.detailInfoHotels,
                    detailInfoFood: this.state.detailInfoFood,
                    detailInfoNightlife: this.state.detailInfoNightlife,
                    reviews: this.state.reviews,
                    news: this.state.news,
                    handleDetailFood: this.handleDetailFood,
                    handleDetailHotels: this.handleDetailHotels,
                    handleDetailNightlife: this.handleDetailNightlife
               }}>
               {this.props.children}
           </InfoContext.Provider>
        )
    }
}

const InfoConsumer = InfoContext.Consumer;

export {InfoProvider, InfoConsumer};
