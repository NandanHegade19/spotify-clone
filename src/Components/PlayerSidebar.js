import React from 'react';
import '../Styles/PlayerSidebar.css'
import PlayerSidebarOption from './PlayerSidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from '../DataLayer';

function PlayerSidebar() {

    const [{playlists}, dispatch] = useDataLayerValue();

    return (
        <div className = "playersidebar">
            <img src = "https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png" alt = "spotify image" className = "playersidebar__logo"/>
            <PlayerSidebarOption Icon = {HomeIcon} title = "Home"/>
            <PlayerSidebarOption Icon = {SearchIcon} title = "Search" />
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
