import "next-auth";
import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      linkedInProfile?: any;
    } & DefaultSession["user"];
  }

  interface Profile {
    picture?: string;
    email?: string;
    name?: string;
    sub?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    linkedInProfile?: any;
  }
}
