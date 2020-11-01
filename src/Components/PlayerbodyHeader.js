import React from 'react';
import '../Styles/PlayerbodyHeader.css';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import { useDataLayerValue } from '../DataLayer';


function PlayerbodyHeader() {

    const [{user}, dispatch] = useDataLayerValue();
    return (
        <div className = "playerbodyheader">
        <div className = "playerbodyheader__left">
            <SearchIcon/>
            <input type="text" placeholder = "Search for Artists, Songs, or Albums"/>
        </div>
        <div className = "playerbodyheader__right">
            <Avatar src = {user?.images[0]?.url} alt = "User"/>
            <h4> {user?.display_name} </h4>
        </div></div>
    )
}

export default PlayerbodyHeader;
