import React from 'react';
import '../Styles/LoginPage.css';
import {loginURL} from '../spotify';


function LoginPage() {
    return (
        <div className = "loginpage">
            <img className = "logo" src = "https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png" alt = "" />
            <hr className = "hr"/>
            <p><strong>To continue login to spotify,</strong></p>
            <button disabled className = "disabledbtn">Continue with Facebook</button>
            <button disabled className = "disabledbtn">Continue with Apple</button>
            <button disabled className = "disabledbtn">Continue with Google</button>
            <a href = {loginURL}>LOGIN WITH SPOTIFY</a>
        </div>
    )
}

export default LoginPage;
