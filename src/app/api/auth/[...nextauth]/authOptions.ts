import GoogleProvider from "next-auth/providers/google";
import type { NextAuthOptions, Session as DefaultSession} from "next-auth";
import type { JWT as DefaultJWT } from "next-auth/jwt";

// Extend Session and JWT types to include accessToken
interface Session extends DefaultSession {
    accessToken?: string;
}

interface JWT extends DefaultJWT {
    accessToken?: string;
}

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
        })
    ],
    callbacks: {
        async jwt({ token, account }) {
            if (account?.access_token) {
                (token as JWT).accessToken = account.access_token;
            }
            return token;
        },
        async session({ session, token }) {
            (session as Session).accessToken = (token as JWT).accessToken;
            return session;
        }
    }
};