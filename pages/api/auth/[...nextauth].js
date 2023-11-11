import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: 'ab0fae16fc645801fe47',
      clientSecret: 'febc6fdd013fff77f19a29a47190d7c456cfde4a',
    }),
  ],
  secret : 'sunrise'
};
export default NextAuth(authOptions); 