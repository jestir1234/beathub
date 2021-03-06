import * as SongsAPIUtil from '../util/songs_api_util';
import { replaceQueuSongs } from './queu_actions';

export const RECEIVE_SONGS = 'RECEIVE_SONGS';
export const RECEIVE_CURRENT_SONG = 'RECEIVE_CURRENT_SONG';
export const REMOVE_CURRENT_SONG = "REMOVE_CURRENT_SONG";

export const receiveSongs = (songs) => {
  return {
    type: RECEIVE_SONGS,
    songs
  };
};

export const receiveCurrentSong = (currentSong) => {
  return {
    type: RECEIVE_CURRENT_SONG,
    currentSong
  };
};

export const removeCurrentSong = () => {
  return {
    type: REMOVE_CURRENT_SONG,
  };
};

export const fetchAlbumSongs = (albumId) => {
  return (dispatch) => {
    return SongsAPIUtil.fetchAlbumSongs(albumId).then((albumSongs) => dispatch(receiveSongs(albumSongs)));
  };
};

export const fetchPlaylistSongs = (playlistId) => {
  return (dispatch) => {
    return SongsAPIUtil.fetchPlaylistSongs(playlistId).then((playlistSongs) => dispatch(receiveSongs(playlistSongs)));
  };
};

export const fetchSong = (songId) => {
  return (dispatch) => {
    return SongsAPIUtil.fetchSong(songId).then((song) => dispatch(receiveCurrentSong(song)));
  };
};

export const fetchRadioSongs = () => {
  return (dispatch) => {
    return SongsAPIUtil.fetchRadioSongs().then((radioSongs) => dispatch(replaceQueuSongs(radioSongs)));
  };
};

export const fetchRandomSong = (artistId) => {
  return (dispatch) => {
    return SongsAPIUtil.fetchRandomSong(artistId).then((randomSong) => dispatch(receiveCurrentSong(randomSong)));
  };
};

export const fetchUserSongs = (userId) => {
  return SongsAPIUtil.fetchUserSongs(userId);
};
