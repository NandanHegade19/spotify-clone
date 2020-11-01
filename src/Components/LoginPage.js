import React from 'react';
import '../Styles/LoginPage.css';
import {loginURL} from '../spotify';


function LoginPage() {
    return (
        <div className = "loginpage">
            <img src = "https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png" alt = "" />
            <a href = {loginURL}>LOGIN WITH SPOTIFY</a>
        </div>
    )
}

export default LoginPage;
