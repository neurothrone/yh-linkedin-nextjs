import NextAuth from "next-auth";
import LinkedIn from "next-auth/providers/linkedin";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    LinkedIn({
      clientId: process.env.LINKEDIN_CLIENT_ID as string,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET as string,
      authorization: {
        params: {
          scope: "openid profile email",
        },
      },
    }),
  ],
  callbacks: {
    jwt({ token, account, profile }) {
      // Add LinkedIn profile data to the token
      if (account && profile) {
        token.linkedInProfile = profile;
      }
      return token;
    },
    session({ session, token }) {
      // Make LinkedIn profile available in the client session
      if (token.linkedInProfile) {
        session.user = {
          ...session.user,
          linkedInProfile: token.linkedInProfile,
        };
      }
      return session;
    },
  },
  pages: {
    signIn: "/",
    error: "/",
  },
});

export const { GET, POST } = handlers;
