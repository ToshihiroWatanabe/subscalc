# subscalc サブスク計算アプリ


# 動作環境

- Ruby 3.0.2

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
bin/rails g scaffold Subscription name:string month_every:integer price:integer
``