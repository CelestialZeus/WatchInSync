import React from 'react'
import './TrendingGlobal.css'


function TrendingGlobal() {
    const trendingCards = (CardName, CardImage) => (
        <div className='TrendingCardsList'>
            <img src={CardImage} alt={CardName}></img>
            <p>{CardName}</p>
        </div>
    );
    return (
        <div className='Trending'>
            <div className='TrendingGlobal'>
                <h3>Trending Globally</h3>
                <div className='TrendingCardsContainer'>
                    {trendingCards("Vikram", "https://1847884116.rsc.cdn77.org/tamil/home/vikram-movie24062022m.jpg")}
                    {trendingCards("Malayankunju", "https://m.media-amazon.com/images/M/MV5BYjU2MWU2ODQtMzllYi00MTY0LTg1ZGEtNDRmYjMxYTA3MWFjXkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_.jpg")}
                    {trendingCards("Paappan", "https://www.kerala9.com/wp-content/uploads/2022/07/Pappan-Movie-hd-posters-001-702x1024.jpg")}
                    {trendingCards("Stranger Things", "https://rukminim1.flixcart.com/image/416/416/jr3t5e80/poster/a/w/f/medium-stranger-things-poster-for-room-office-13-inch-x-19-inch-original-imafcww8v99r4qhh.jpeg?q=70")}
                    {trendingCards("Money Heist", "https://m.media-amazon.com/images/I/91n4CQr5vZL._AC_SL1500_.jpg")}
                    {trendingCards("Cast Away", "https://i.pinimg.com/originals/65/34/36/65343634bafdcc7f2bfe9d92c554f425.jpg")}

                </div>
            </div>
            <div className='TrendingGlobal'>
                <h3>Trending in Circle</h3>
                <div className='TrendingCardsContainer'>
                    {trendingCards("Vikram", "https://1847884116.rsc.cdn77.org/tamil/home/vikram-movie24062022m.jpg")}
                    {trendingCards("Malayankunju", "https://m.media-amazon.com/images/M/MV5BYjU2MWU2ODQtMzllYi00MTY0LTg1ZGEtNDRmYjMxYTA3MWFjXkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_.jpg")}
                    {trendingCards("Paappan", "https://www.kerala9.com/wp-content/uploads/2022/07/Pappan-Movie-hd-posters-001-702x1024.jpg")}
                    {trendingCards("Stranger Things", "https://rukminim1.flixcart.com/image/416/416/jr3t5e80/poster/a/w/f/medium-stranger-things-poster-for-room-office-13-inch-x-19-inch-original-imafcww8v99r4qhh.jpeg?q=70")}
                    {trendingCards("Money Heist", "https://m.media-amazon.com/images/I/91n4CQr5vZL._AC_SL1500_.jpg")}
                    {trendingCards("Cast Away", "https://i.pinimg.com/originals/65/34/36/65343634bafdcc7f2bfe9d92c554f425.jpg")}

                </div>
            </div>
            <div className='PoweredBy'>
                <p>Made by Jithin, Powered by Firebase<span> 🔥 </span></p>


            </div>
        </div>
    )
}

export default TrendingGlobal
