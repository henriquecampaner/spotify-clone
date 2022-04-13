import { atom } from 'recoil';
import { PlaylistType } from '../types';

export const playlistIdState = atom({
  key: 'playlistIdState',
  default: '37i9dQZF1DX6rsDrBNGuWW',
});

export const playlistState = atom({
  key: 'playlistState',
  default: null as unknown as PlaylistType,
});
