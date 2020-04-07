import React, { Component } from 'react'
import HomeAnimation from '../home_components/Home_animation'
import Text from '../home_components/Some_text'
import View from '../home_components/SkyView'
import Highlight from '../home_components/Highlights'
import '../home_components/style.css'

export default class Home extends Component {
    render() {
        return (
            <>
              <HomeAnimation/> 
              <div className="spliter"/>
              <Text/> 
              <div className="spliter"/>
              <View />
              <div className="spliter"/>
              <Highlight/>
              <div className="spliter"/>
            </>
        )
    }
}
