import connectDB from "@/util/database";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: 'ab0fae16fc645801fe47',
      clientSecret: 'febc6fdd013fff77f19a29a47190d7c456cfde4a',
    }),
  ],
  secret : 'sunrise',
  adapter: MongoDBAdapter(connectDB) // redis adapter 셋팅해도 됨
};
export default NextAuth(authOptions); 