import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import credentialsProvider from "next-auth/providers/credentials";
import { redirect } from "next/navigation";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    credentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {
        // console.log("Signing in with:", credentials);

        if (
          credentials.username === "admin" &&
          credentials.password === "mis@admin"
        ) {
          console.log("Success, user authenticated");
          return {
            id: "test",
            name: "Admin User",
            email: "admin@sppl.com",
          };
        } else return null;
      },
    }),
  ],

  callbacks: {
    async signIn({ account, profile }) {
      if (account.provider === "google") {
        return (
          profile.email_verified && profile.email.endsWith("@sainpackaging.com")
        );
      }
      return true; // Do different verification for other providers that don't have `email_verified`
    },
    authorized: async ({ auth }) => {
      // Logged in users are authenticated, otherwise redirect to login page
      console.log("authenticated: ", auth);
      // redirect('/api/auth/signin');
      return !!auth;
    },
  },
  secret: process.env.AUTH_SECRET,
});
