import React from 'react';
import '../Styles/PlayerbodySongRow.css';



function PlayerbodySongRow({track}) {
    return (
        <div className = "playerbodysongrow">
            <img src = {track.album.images[0].url} alt = "" className = "playerbodysongrow__albumimg"/>
            <div className = "playerbodysongrow__info">
                <h1> {track.name} </h1>
                <p> {track.artists.map((artist) => artist.name).join(", ")}{track.album.name} </p>
            </div>
        </div>
    )
}

export default PlayerbodySongRow;
