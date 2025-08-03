# Cognitoを利用したOIDC,OAuth2.0学習用のサンプルプロジェクト

## 技術スタック
- Next.js
- Auth.js
- AWS Cognito
- idP Google

## 環境変数の設定方法

`user-demo/.env.local` を作成する。

```bash
cp .env.sample .env.local
```

以下の値を埋める。

```txt
AUTH_SECRET=
AUTH_COGNITO_ID=
AUTH_COGNITO_SECRET=
AUTH_COGNITO_ISSUER=https://cognito-idp.{region}.amazonaws.com/{PoolId}
AUTH_URL=http://localhost:3000
```

以下のコマンドを実行する

```bash
npx auth secret
```

これで `.env.local` に `AUTH_SECRET` の値が埋め込まれる

`AUTH_COGNITO_ID` と `AUTH_COGNITO_SECRET` については、 Congnitoのマネジメントコンソール画面から取得する

リージョンIDとプールIDもCongnitoのマネジメントコンソール画面から取得する

## 動かし方

`user-demo`フォルダ配下で実行すること

```bash
bun install
```

ビルド

```bash
bun run build
```

起動

```bash
bun run dev
```

## メモ

スコープ = アクセストークンに詰めるデータの範囲

## callback URLの指定

CallBack URLは以下のように指定する

NextAuth.js V5 から指定が変わったらしい

- `http://localhost:3000/api/auth/callback/cognito`
- `http://localhost:3000/api/auth/callback/google`

環境変数に以下の情報も設定が必要になったとのこと

```txt
AUTH_URL=http://localhost:3000
```

## 認証が成功した時に返ってくるデータ

※ 一部データをマスキングしています。

ユーザー情報はIDトークンなどの情報が返ってくる

```json
authorization result {
  "user": {
    "id": "5d3357...ecb6dcb",
    "name": "Haruki Kondo",
    "email": "example@com"
  },
  "account": {
    "id_token": "eyJ...NHBw",
    "access_token": "eyJ...874A",
    "refresh_token": "eyJ...SA",
    "expires_in": 3600,
    "token_type": "bearer",
    "expires_at": 1754204491,
    "provider": "cognito",
    "type": "oidc",
    "providerAccountId": "0...50"
  },
  "profile": {
    "custom:access_token": "ya2...75",
    "at_hash": "Q...IQ",
    "sub": "07....0",
    "cognito:groups": [
      "ap-northeast-1_yTA41F6w3_Google"
    ],
    "email_verified": false,
    "iss": "https://cognito-idp.ap-northeast-1.amazonaws.com/ap-northeast-1_yTA41F6w3",
    "cognito:username": "google_102904630171592520592",
    "nonce": "Gf3E....rUWD2z0",
    "origin_jti": "6f12....50c",
    "aud": "56o....vb9p",
    "identities": [
      {
        "dateCreated": "1754198622222",
        "userId": "102,...20592",
        "providerName": "Google",
        "providerType": "Google",
        "issuer": null,
        "primary": "true"
      }
    ],
    "token_use": "id",
    "auth_time": 1754200890,
    "name": "Haruki Kondo",
    "exp": 1754204490,
    "iat": 1754200891,
    "jti": "541....c28",
    "email": "example@gmail.com"
  },
  "cookies": [
    {
      "name": "authjs.state",
      "value": "",
      "options": {
        "httpOnly": true,
        "sameSite": "lax",
        "path": "/",
        "secure": false,
        "maxAge": 0
      }
    },
    {
      "name": "authjs.nonce",
      "value": "",
      "options": {
        "httpOnly": true,
        "sameSite": "lax",
        "path": "/",
        "secure": false,
        "maxAge": 0
      }
    }
  ]
}
```

## 参考文献
- [Next Auth.js Getting Started](https://next-auth.js.org/getting-started/example)
- [GitHub - nextauthjs/next-auth-example](https://github.com/nextauthjs/next-auth-example)
- [Next Auth.js デモアプリ](https://next-auth-example.vercel.app/)
- [Next Auth.js 設定方法](https://next-auth.js.org/configuration/initialization)
- [JWT Debuger - idTokenの中身の解析に使う](https://www.jwt.io/ja)