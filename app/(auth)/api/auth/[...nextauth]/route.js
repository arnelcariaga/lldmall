import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    Credentials({
      async authorize(credentials) {
        console.log(credentials);
      },
    }),
  ],
});

export { handler as GET, handler as POST };
