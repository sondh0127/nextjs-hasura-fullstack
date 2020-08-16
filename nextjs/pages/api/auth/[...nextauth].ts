import jwt from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

import ISession from '../../../types/session';
import iToken from '../../../types/token';
import IUser from '../../../types/user';

const options = {
  providers: [
    Providers.Email({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  database: process.env.DATABASE_URL,
  // adapter: Adapters.Prisma.Adapter({ prisma }),
  session: {
    jwt: true,
  },
  jwt: {
    encode: async ({ token, secret }: { token: iToken; secret: string }) => {
      const tokenContents = {
        id: `${token.id}`,
        name: token.name,
        email: token.email,
        picture: token.picture,
        'https://hasura.io/jwt/claims': {
          'x-hasura-allowed-roles': ['admin', 'user'],
          'x-hasura-default-role': 'user',
          'x-hasura-user-id': `${token.id}`,
        },
        iat: Date.now() / 1000,
        exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
        sub: `${token.id}`,
      };

      const encodedToken = jwt.sign(
        tokenContents,
        process.env.AUTH_PRIVATE_KEY?.replace(/\\n/gm, '\n') || secret,
        {
          algorithm: 'RS512',
        }
      );

      return encodedToken;
    },
    decode: async ({ token, secret }: { token: string; secret: string }) => {
      const decodedToken = jwt.verify(
        token,
        process.env.AUTH_PRIVATE_KEY?.replace(/\\n/gm, '\n') || secret,
        {
          algorithms: ['RS512'],
        }
      );

      return decodedToken;
    },
  },
  debug: true,
  callbacks: {
    session: async (session: ISession, user: IUser) => {
      session.id = user.id;

      return Promise.resolve(session);
    },
    jwt: async (token: iToken, user: IUser) => {
      const isSignIn = user ? true : false;

      if (isSignIn) {
        token.id = user.id;
      }

      return Promise.resolve(token);
    },
  },
};

const Auth = (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options);

export default Auth;
