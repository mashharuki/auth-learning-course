import NextAuth from "next-auth";
import Cognito from "next-auth/providers/cognito";

/**
 * Next Auth.js の設定
 */
export const {auth, handlers, signIn, signOut} = NextAuth({
  // プロバイダーでCognitoを指定
  providers: [
    Cognito({
        id: "cognito", // signIn() メソッドの引数で指定するID
        checks: ['state', 'nonce'],
        authorization: {
          params: {
            scope: "openid email profile", // 認証時に要求するスコープ(アクセストークンに詰める情報)
          }
        },
      },
    ),
    Cognito({
      id: "google", // signIn() メソッドの引数で指定するID
      checks: ['state', 'nonce'],
      authorization: {
        params: {
          identity_provider: "Google", // ここは Cognitoの仕様となっている
          scope: "openid email profile", // 認証時に要求するスコープ(アクセストークンに詰める情報)
        }
      },
    }),
  ],
  debug: true,
})
