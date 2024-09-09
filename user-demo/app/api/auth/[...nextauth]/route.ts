import NextAuth from "next-auth";
import CognitoProvider from "next-auth/providers/cognito";

const handler = NextAuth({
  providers: [
    CognitoProvider({
      id: "cognito",
      clientId: process.env.COGNITO_CLIENT_ID!,
      clientSecret: process.env.COGNITO_CLIENT_SECRET!,
      issuer: process.env.COGNITO_ISSUER!,
      checks: ['state', 'nonce'],
      authorization: {
        params: {
          scope: "openid profile email",
        }
      },
    }),
    CognitoProvider({
      id: "google",
      clientId: process.env.COGNITO_CLIENT_ID!,
      clientSecret: process.env.COGNITO_CLIENT_SECRET!,
      issuer: process.env.COGNITO_ISSUER!,
      checks: ['state', 'nonce'],
      authorization: {
        params: {
          identity_provider: "Google",
          scope: "openid profile email",
        }
      },
    }),
  ],
  debug: true,
  secret: process.env.NEXTAUTH_SECRET,
});
export {handler as GET, handler as POST}
