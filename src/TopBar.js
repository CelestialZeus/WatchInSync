import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './TopBar.css'

function TopBar() {
    return (
        <div className="TopBar">
            <div className="SearchBar">
                <SearchIcon />
                <input type="text" placeholder="Search for movies, TV shows..." />
            </div>
        </div>
    )
}

export default TopBar
