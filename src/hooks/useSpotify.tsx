import { useSession, signIn } from 'next-auth/react';
import { useEffect } from 'react';
import { spotifyApi } from '../config/spotify';

const useSpotify = () => {
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      if (session.error === ' RefreshTokenError') {
        signIn();
      }

      spotifyApi.setAccessToken(session.user.acessToken);
    }
  }, [session]);

  return spotifyApi;
};

export { useSpotify };
