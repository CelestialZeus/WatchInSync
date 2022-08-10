import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './TopBar.css'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

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
            </div>

            <div className="CircleNameContainer">
            </div>
        </div>
    )
}

export default TopBar
