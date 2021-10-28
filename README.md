# subscalc サブスク計算アプリ

月額制サービスを登録し、料金の合計を計算します。

# 主な使用技術

- Next.js
- Ruby on Rails
- MongoDB

# 環境変数

## Next.js用

名前|説明
---|---
NEXT_PUBLIC_RAILS_API_URL|Ruby on RailsのAPIサーバーのデプロイ先のURL

## Ruby on Rails用

名前|説明
---|---
development.clients.default.database|開発用のデータベース名
development.clients.default.hosts|開発用データベースのホスト:ポート
test.clients.default.database|テスト用のデータベース名
test.clients.default.hosts|テスト用データベースのホスト:ポート
MONGODB_URL|(本番環境)MongoDBの接続用URL
FRONTEND_URL|(本番環境)フロントエンドのデプロイ先のURL

# Ruby on Railsアプリ制作時に使った主なコマンド

```
# Railsアプリ作成
rails new rails-api --api --skip-bundle --skip-active-record --skip-test --skip-system-test
```

```
# Mongoidの設定ファイルを作成
rails g mongoid:config
```

```
# Subscriptionモデルと関連ファイルを作成
rails g scaffold Subscription name:string monthEvery:integer price:integer
```