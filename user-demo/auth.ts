import NextAuth from "next-auth"
import Cognito from "next-auth/providers/cognito";

/**
 * Next Auth.js の設定
 */
export const {auth, handlers, signIn, signOut} = NextAuth({
  // プロバイダーでCognitoを指定
  providers: [
    Cognito({
        id: "cognito",
        checks: ['state', 'nonce'],
        authorization: {
          params: {
            scope: "openid email profile",
          }
        },
      },
    ),
    Cognito({
      id: "google",
      checks: ['state', 'nonce'],
      authorization: {
        params: {
          identity_provider: "Google",
          scope: "openid email profile",
        }
      },
    }),
  ],
  debug: true,
})
