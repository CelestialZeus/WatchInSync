import React from 'react'
import logo from './assets/logo.gif';
import './Sidebar.css';
import GridViewIcon from '@mui/icons-material/GridView';
import UserOptionButtons from './UserOptionButtons';
import GroupIcon from '@mui/icons-material/Group';
import MovieIcon from '@mui/icons-material/Movie';
import SignpostIcon from '@mui/icons-material/Signpost';
import PublicIcon from '@mui/icons-material/Public';
import ListAltIcon from '@mui/icons-material/ListAlt';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import LogoutIcon from '@mui/icons-material/Logout';
import { logout } from './features/userSlice';
import { useDispatch } from 'react-redux';
import { signOut } from 'firebase/auth';
import { authent } from './Firebase';

function Sidebar() {

    const dispatch = useDispatch();

    const logoutHandler = e => {
        dispatch(logout());
        signOut(authent);
    }

    return (
        <div className="sidebar">
            <div className="logos">
                <img src={logo} alt={"logo"} />
            </div>
            <div className="userContainer">
                <div className="userControlOptions">
                    <UserOptionButtons Icon={GridViewIcon} text={"Dashboard"} />
                    <UserOptionButtons Icon={GroupIcon} text={"My Circle"} />
                    <UserOptionButtons Icon={MovieIcon} text={"My Watch History"} />
                    <UserOptionButtons Icon={ListAltIcon} text={"My Plans"} />
                    <UserOptionButtons Icon={TrendingUpIcon} text={"General Statistics"} />
                    <p className="Trending">Trending</p>
                    <UserOptionButtons Icon={PublicIcon} text={"Global"} />
                    <UserOptionButtons Icon={SignpostIcon} text={"Local"} />
                </div>

                <div className="appControlOptions">
                    <p className="AppControl">App Control</p>
                    <UserOptionButtons Icon={SettingsIcon} text={"Settings"} />
                    <UserOptionButtons Icon={HelpIcon} text={"Help"} />
                    <UserOptionButtons Icon={LogoutIcon} text={"Log out"} onClick={logoutHandler} />

                </div>
            </div>
        </div>
    )
}

export default Sidebar
