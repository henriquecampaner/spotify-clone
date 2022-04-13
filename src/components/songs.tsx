import { ReactElement } from 'react';
import { useRecoilValue } from 'recoil';
import { playlistState } from '../atoms/playlistAtom';
import { Song } from './song';

const Songs = (): ReactElement => {
  const playlist = useRecoilValue(playlistState);
  return (
    <div className="text-white px-8 flex flex-col space-y-1 pb-28">
      {playlist?.tracks?.items &&
        playlist?.tracks!.items.map((track, index) => (
          // <div>{track.track.name}</div>
          <Song key={track.track.id} track={track} order={index} />
        ))}
    </div>
  );
};

export { Songs };
