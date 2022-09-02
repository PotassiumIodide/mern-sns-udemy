# mern-sns-udemy

## バックエンドの設定

1. MongoDBでクラスターを新規作成する。
2. 作成したクラスターのConnect -> Connect your applicationから①は変更せず、②のコードをコピーする。
3. `backend`フォルダ内に`.env`ファイルを作成し、ステップ2でコピーしたコードをペーストし、`<password>`の部分を消去し、クラスター作成時に設定したパスワードを記述する。
4. 3のコードを`MONGOURL`という変数に代入する。例:
```
MONGOURL=mongodb+srv://yourname:yourpassword@cluster123.fjdke.mongodb.net/?retryWrites=true&w=majority
```
`backend`フォルダ内で以下を実行して必要なパッケージをインストールする:
```
npm i
```


## フロントエンドの設定

1. `.env`ファイルを作成し、以下の記述を加える(ポート番号はバックエンドで指定したもの):
```
REACT_APP_PUBLIC_FOLDER=http://localhost:5000/images/
```
`frontend`フォルダ内で以下を実行して必要なパッケージをインストールする:
```
npm i
```

## 使い方

`backend`、`frontend`の両方でターミナルを開き、以下を実行:
```
npm start
```
