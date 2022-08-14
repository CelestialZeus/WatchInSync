import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './TopBar.css'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import logo from './logo.svg';
import WatchTime from './WatchTime'
import TrendingGlobal from './TrendingGlobal';

function TopBar() {

    return (
        <div className="TopBar">
            <div className="SearchBar">
                <SearchIcon />
                <input type="text" placeholder="Search for movies, TV shows..." />
            </div>

            <div className="NotificationsContainer">
                <NotificationsNoneIcon />
            </div>

            <div className="UserAccountsContainer">
                <div className="ProfileClosedContainer">
                    <img src="https://avatars.githubusercontent.com/u/73242397?s=400&u=91cf7ab8042d6f69a07f0762dca584a9cb2023b7&v=4" alt="profilepic"></img>
                    <p className="ProfileName">Jithin</p>

                </div>

            </div>

            <div className="CircleNameContainer">

            </div>
            <div className="break"></div>

            <div className="Trending">
                <TrendingGlobal />
            </div>
            <div className="WatchTime">
                <WatchTime />

            </div>

        </div>)

}

export default TopBar
