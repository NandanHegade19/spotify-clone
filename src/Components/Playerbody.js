import React from 'react';
import { useDataLayerValue } from '../DataLayer';
import PlayerbodyHeader from './PlayerbodyHeader';
import PlayerbodySongRow from './PlayerbodySongRow';
import '../Styles/Playerbody.css';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';


function Playerbody({spotifyapi}) {
    
    const [{discover_weekly}, dispatch] = useDataLayerValue();
    console.log("disocver:--->",discover_weekly);

    return (
        <div className = "playerbody">
            <PlayerbodyHeader spotifyapi = {spotifyapi}/>
            <div className = "playerbody__info">
                <img src = {discover_weekly?.images[0].url} alt = ""/>
                <div className = "playerbody__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover weekly</h2>
                    <p> {discover_weekly?.description} </p>
                </div>
            </div>
            <div className = "playerbody__songs">
                <div className = "playerbody__icons">
                    <PlayCircleFilledIcon className = "playerbody__play"/>
                    <FavoriteIcon fontsize = "large" className = "playerbody__fav"/>
                    <MoreHorizIcon className = "playerbody__hori"/>
                </div>
                {discover_weekly?.tracks.items.map(item => (
                    <PlayerbodySongRow track = {item.track}/>
                ))}
            </div>
        </div>
    )
}

export default Playerbody;
