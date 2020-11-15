//https://developer.spotify.com/documentation/web-playback-sdk/quick-start/

export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "https://spotifyclone-37de5.web.app/callback/";

const clientId = "b246bddd43794924bd616c58ecd3b95f";

//CRUD permissions
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
];

export const getTokenFromURL = () => {
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((initial, item) => {
            //accessToken = examplesecretkey&name=nandan&pass=hfuwafho
            let parts = item.split('='); //gets upto 1st &
            initial[parts[0]] = decodeURIComponent(parts[1]);
            return initial;
        }, {});
}

export const loginURL = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
