import React from 'react'
import './WatchTime.css'

function WatchTime() {

    const topWatchers = (Name, WatchTime, LatestWatched) => (
        <div className="TopWatcher">
            <p className="TopWatcherName">{Name}</p>
            <p className='TopWatcherTime'>{WatchTime}</p>
        </div >
    )


    return (
        <div className="WatchTime">
            <h3>Top Watchers In My Circle</h3>
            <div className="WatchTimeCards">
                {topWatchers("Jithin John", "1 hr 47 mins", "kfjdsl")}
                {topWatchers("Hari Naryan", "1 hr 36 mins", "Fifty Shades of Dark")}
                {topWatchers("Leo Abraham", "32 mins", "Money Heist")}
                {topWatchers("Joshua", "1 hr 26 mins", "Cast Away")}
                {topWatchers("Casper Jeundrup", "18 mins", "The Martian")}
                {topWatchers("Dmitry Vendeloko", "1 hr12 mins", "The guy from Russia")}

            </div>
        </div>
    )
}

export default WatchTime
