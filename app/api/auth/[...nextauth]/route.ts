import NextAuth from "next-auth";
import LinkedIn from "next-auth/providers/linkedin";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    LinkedIn({
      clientId: process.env.LINKEDIN_CLIENT_ID as string,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET as string,
      authorization: {
        params: {
          scope: "openid profile email r_liteprofile r_emailaddress",
        },
      },
      profile(profile, tokens) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture || null,
        };
      },
    }),
  ],
  callbacks: {
    jwt({ token, account, profile }) {
      // Add LinkedIn profile data to the token
      if (account && profile) {
        token.linkedInProfile = profile;
        // Ensure profile picture is available
        if (profile.picture && !token.picture) {
          token.picture = profile.picture;
        }
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

        // Ensure image is set in the session
        if (token.picture && !session.user.image) {
          session.user.image = token.picture;
        }
      }
      return session;
    },
  },
  debug: process.env.NODE_ENV === "development",
  pages: {
    signIn: "/",
    error: "/",
  },
});

export const { GET, POST } = handlers;
