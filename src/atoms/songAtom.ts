import { atom } from 'recoil';

export const currentTrackIdState = atom({
  key: 'currentTrackIdState',
  default: null as any,
});

export const iisPlayingState = atom({
  key: 'isPlayingState',
  default: false,
});
