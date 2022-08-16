import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './TopBar.css'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import WatchTime from './WatchTime'
import TrendingGlobal from './TrendingGlobal';
import { useDispatch, useSelector } from 'react-redux';
import userSlice, { logout, selectUser } from './features/userSlice';
import { authent } from './Firebase';
import { signOut } from "firebase/auth";

function TopBar() {
    const dispatch = useDispatch();

    const user = useSelector(selectUser);

    const logoutHandler = e => {
        dispatch(logout());
        signOut(authent);
    }

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
                <div className="ProfileClosedContainer" onClick={logoutHandler}>
                    <img src={user.profilepic} alt="profilepic"></img>
                    <p className="ProfileName">{user.fullname}</p>
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
