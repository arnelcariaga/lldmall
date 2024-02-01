import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { conn } from "@/app/libs/dbC";
import { uHashP } from "@/app/libs/crypt";
import { sign } from "@/app/libs/jwtF";

export const authOptions = {
  providers: [
    Credentials({
      async authorize(credentials) {
        const { email, pass } = credentials;

        const selectUser = await conn.query(
          `SELECT
          userId,
          firstName,
          lastName,
          userTypeId,
          lastSignIn,
          pass,
          username,
          email
          FROM user
          WHERE email = ?`,
          email
        );

        await conn.end();

        if (selectUser.length > 0) {
          const data = selectUser[0];
          const hashedPass = data.pass;
          const checkPass = await uHashP(pass, hashedPass);
          if (checkPass) {
            const dataToJSON = JSON.stringify(data);
            const accessToken = sign(dataToJSON);
            delete data.pass;
            delete data.userId;
            return {
              ...data,
              accessToken,
            };
          } else {
            return false;
          }
        } else {
          return false;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.user = user;
        token.accessToken = user.accessToken;
      }
      return token;
    },
    session: async ({ session, token }) => {
      if (token.user) session.user = token.user;
      session.accessToken = token.accessToken;
      return session;
    },
  },
  secret: process.env.AUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
