import React from 'react';
import '../Styles/PlayerSidebar.css'
import PlayerSidebarOption from './PlayerSidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from '../DataLayer';
import {Link} from 'react-router-dom'


function PlayerSidebar() {

    const [{playlists}, dispatch] = useDataLayerValue();

    return (
        <div className = "playersidebar">
            <img src = "https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png" alt = "spotify image" className = "playersidebar__logo"/>
            <Link className = "link" to = "/"><PlayerSidebarOption Icon = {HomeIcon} title = "Home"/></Link>
            <Link className = "link" to = "/search"><PlayerSidebarOption Icon = {SearchIcon} title = "Search" /></Link>
            <PlayerSidebarOption Icon = {LibraryMusicIcon} title = "Your Library" />
            <br/>
            <strong className = "playersidebar__title">PLAYLISTS</strong>
            <hr/>
            {playlists?.items?.map((playlist) => (
                <PlayerSidebarOption title = {playlist.name} />
            ))}

        </div>
        
    )
}

export default PlayerSidebar;
