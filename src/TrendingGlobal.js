import Card from "./Card";
import React from 'react'
import ReactCardSlider from 'react-card-slider-component';
// import ReactCardSlider from 'react-card-slider-component';
import './TrendingGlobal.css'


function TrendingGlobal() {
    const trendingCards = (CardName, CardImage) => (
        <div className='TrendingCardsList'>
            <img src={CardImage} alt={CardName}></img>
            <p>{CardName}</p>
        </div>
    );


    const sliderClick = (e) => { }

    return (
        <div className='Trending'>
            <div className='TrendingGlobal'>
                <h3>Trending Globally</h3>
                <div className='TrendingCardsContainer'>

                    <Card />

                </div>
            </div>
            <div className='TrendingGlobal'>
                <h3>Trending in this circle</h3>
                <div className='TrendingCardsContainer'>
                    <Card />

                </div>
            </div>
            <div className='PoweredBy'>
                <p>Made by Jithin, Powered by Firebase<span> 🔥 </span></p>


            </div>
        </div>
    )
}

export default TrendingGlobal
