import { JWT } from 'next-auth/jwt';
import { SessionOptions } from 'next-auth';

declare module 'next-auth/jwt' {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    /** OpenID ID Token */
    idToken?: string;
    accessTokenExpires: number;
    acessToken: string;
    refreshToken: string;
  }
}

declare module 'next-auth' {
  interface Session extends SessionOptions {
    user: {
      acessToken: string;
      name: string;
      email: string;
      image: string;
    };
  }
}
