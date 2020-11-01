import { useEffect, useState } from 'react';
import './App.css';
import LoginPage from "./Components/LoginPage";
import { getTokenFromURL } from './spotify';
import SpotifyWebAPI from 'spotify-web-api-js';
import Player from './Components/Player';
import {useDataLayerValue} from './DataLayer';

//to connect actual spotify to our react app
const spotifyapi = new SpotifyWebAPI();

function App() {

  //const [token, setToken] = useState('');
  const [{token}, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromURL(); //gets access token from actual spotify after logging in and accepting CRUD terms
    window.location.hash = ""; //hide response token in url
    let _token = hash.access_token;
    if(_token){
      spotifyapi.setAccessToken(_token); //giving access token to spotify api to talk back and forth
      //instead of setToken(_token) locally, we dispatch(send and set in) datalayer;
      dispatch({
        type: 'SET_TOKEN',
        token: _token
      })

      spotifyapi.getMe().then(user => {
        dispatch({ //set actions in reducer
          type: 'SET_USER',
          user: user
        })
      });
      spotifyapi.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLIST',
          playlists: playlists
        })
      });
      spotifyapi.getPlaylist('37i9dQZEVXcFg5eORuSZd9').then((resp) => {
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: resp
        })
      });
    }
  }, []);

  return (
    <div className="App">
      {
        token ? (<Player spotifyapi = {spotifyapi} />) : (<LoginPage/>)
      }
    </div>
  );
}

export default App;
