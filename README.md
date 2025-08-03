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

## 参考文献
- [Next Auth.js Getting Started](https://next-auth.js.org/getting-started/example)
- [GitHub - nextauthjs/next-auth-example](https://github.com/nextauthjs/next-auth-example)
- [Next Auth.js デモアプリ](https://next-auth-example.vercel.app/)
- [Next Auth.js 設定方法](https://next-auth.js.org/configuration/initialization)