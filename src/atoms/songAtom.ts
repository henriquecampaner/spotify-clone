import { atom } from 'recoil';
import { Track } from '../types';

export const currentTrackIdState = atom({
  key: 'currentTrackIdState',
  default: null as unknown as Track,
});

export const iisPlayingState = atom({
  key: 'isPlayingState',
  default: false,
});
