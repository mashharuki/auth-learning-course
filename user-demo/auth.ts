import NextAuth from "next-auth"
import Cognito from "next-auth/providers/cognito";

export const {auth, handlers, signIn, signOut} = NextAuth({
  providers: [
    Cognito({
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
      },
    ),
    Cognito({
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
})
