# mern-sns-udemy

## バックエンドの設定

MongoDB内のDatabase Deploymentsから，作成したクラスタの
Connect -> Connect your applicationへ移動し，
1. Select your driver and version はそのままで、
2. Add your connection string into your application codeにあるコードをコピーする。

`backend`フォルダ内に`.env`ファイルを作成し，内部に上でコピーした
```
mongodb+srv://<yourname>:<password>@cluster0.irk7bze.mongodb.net/?retryWrites=true&w=majority
```
を貼り付け，`<password>`部分に使用するクラスターのパスワードを入力して保存する。

必要なパッケージのインストール:
```
npm i
```

## フロントエンドの設定

`frontend`フォルダ内に`.env`ファイルを作成し，内部に
```
REACT_APP_PUBLIC_FOLDER=http://localhost:5000/images/
```
と記述する。(ポート番号はバックエンド側で指定したもの。)

必要なパッケージのインストール:
```
npm i
```

## 使い方

`backend`と`frontend`の2つでターミナルを立ち上げ，双方で以下を実行:
```
npm start
```