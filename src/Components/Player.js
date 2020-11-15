import React from 'react';
import '../Styles/Player.css';
import Playerbody from './Playerbody';
import PlayerControls from './PlayerControls';
import PlayerSidebar from './PlayerSidebar';

function Player({spotifyapi}) {
    return (
        <div className = "player">
           <div className = "player__main">
               {/*<PlayerSidebar/>*/}
               <Playerbody spotifyapi = {spotifyapi}/>
           </div>
           <div className = "player__controls">
               <PlayerControls/>
           </div>
        </div>
    )
}

export default Player;
