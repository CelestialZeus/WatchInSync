import React from 'react'
import './WatchTime.css'

function WatchTime() {

    const topWatchers = (Name, WatchTime, LatestWatched) => (
        <div className="TopWatcher">
            <p>{Name}</p>
            <p>{WatchTime}</p>
            <p>{LatestWatched}</p>
        </div >
    )


    return (
        <div className="WatchTime">
            <h3>WatchTime</h3>
            <div className="WatchTimeCards">
                {topWatchers("Jithin John", "1 hr", "Vikram")}
                {topWatchers("Hari Naryan", "36 mins", "Fifty Shades of Dark")}
                {topWatchers("Leo Abraham", "32 mins", "Money Heist")}
                {topWatchers("Jins Jacob", "26 mins", "Cast Away")}
                {topWatchers("Casper Jeundrup", "18 mins", "The Martian")}
                {topWatchers("Dmitry Vendeloko", "12 mins", "The guy from Russia")}

            </div>
        </div>
    )
}

export default WatchTime
