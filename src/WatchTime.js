import React from 'react'
import TopWatchGraph from './TopWatchGraph'
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
            <div className="TopWatchGraph">

                <TopWatchGraph />
            </div>
            <div className="WatchTimeCards">
                {topWatchers("Jithin John", "1 hr 47 mins", "kfjdsl")}
                {topWatchers("Joshua", "1 hr 26 mins", "Cast Away")}
                {topWatchers("Casper Jeundrup", "18 mins", "The Martian")}
                {topWatchers("Dmitry Vendeloko", "1 hr12 mins", "The guy from Russia")}
            </div>
        </div>
    )
}

export default WatchTime
