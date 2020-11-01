import React from 'react';
import '../Styles/PlayerControls.css';
import PlayCircleOutlineOutlinedIcon from '@material-ui/icons/PlayCircleOutlineOutlined';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import { Grid, Slider } from '@material-ui/core';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';

function PlayerControls() {
    return (
        <div className = "playercontrols">
            <div className = "playercontrols__left">
                <img src = "" alt = "" className = "playercontrols__albumPic"/>
                <div className = "playercontrols__songInfo">
                    <h4>Song name</h4>
                    <p>Artist</p>
                </div>
            </div>
            <div className = "playercontrols__center">
                <ShuffleIcon className = "playercontrols__green"/>
                <SkipPreviousIcon className = "playercontrols__icon"/>
                <PlayCircleOutlineOutlinedIcon className = "playercontrols__icon" fontSize = "large"/>
                <SkipNextIcon className = "playercontrols__icon"/>
                <RepeatIcon className = "playercontrols__icon"/>
            </div>
            <div className = "playercontrols__right">
                <Grid container spacing = {2}>
                    <Grid item >
                        <PlaylistPlayIcon/>
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon/>
                    </Grid>
                    <Grid item xs>
                        <Slider aria-labelledby = "continuous-slider"/>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default PlayerControls;
