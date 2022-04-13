import SpotifyWebApi from 'spotify-web-api-node';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const { publicClientSecret, publicClientId, jwtSecret } = publicRuntimeConfig;

const configEnv = {
  publicClientSecret,
  publicClientId,
  jwtSecret,
};

const scopes = [
  'user-read-email',
  'playlist-read-private',
  'playlist-read-collaborative',
  'streaming',
  'user-read-private',
  'user-library-read',
  'user-top-read',
  'user-read-playback-state',
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-follow-read',
].join(',');

const params = {
  scope: scopes,
};

const queryParamString = new URLSearchParams(params).toString();

const LOGIN_URL = `https://accounts.spotify.com/authorize?${queryParamString}`;

const spotifyApi = new SpotifyWebApi({
  clientId: publicClientId,
  clientSecret: publicClientSecret,
});

export { spotifyApi, LOGIN_URL, configEnv };
