# subscalc サブスク計算アプリ


# 動作環境

- Ruby 3.0.2

# 環境変数

## Rails API用

名前|説明
---|---
development.clients.default.database|開発用のデータベース名
development.clients.default.hosts|開発用データベースのホスト:ポート
test.clients.default.database|テスト用のデータベース名
test.clients.default.hosts|テスト用データベースのホスト:ポート

# コマンド

```
# Railsアプリ作成
rails new rails-api --api --skip-bundle --skip-active-record --skip-test --skip-system-test
```

```
# Mongoidの設定ファイルを作成
bin/rails g mongoid:config
```

```
rails webpacker:install
```

```
bin/rails g scaffold Subscription name:string monthEvery:integer price:integer
``