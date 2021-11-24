## HTMLで構造を作成

+ `index.html`をマークアップ<br>

```
<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScriptのみでTodoアプリ</title>
    <link rel="stylesheet" href="./styles.css">
    <script src="./index.js" type="text/javascript" defer></script>
</head>

<body>
    <div>
        <input placeholder="TODOを入力">
        <button>追加</button>
    </div>
    <div>
        <p>未完了のTODO</p>
        <ul>
            <div>
                <li>TODOです</li>
                <button>完了</button>
                <button>削除</button>
            </div>
        </ul>
    </div>
    <div>
        <p>完了したTODO</p>
        <ul>
            <div>
                <li>TODOでした</li>
                <button>戻す</button>
            </div>
        </ul>
    </div>
</body>

</html>
```

## CSSでスタイリング

+ `index.html`を編集<br>

```
<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScriptのみでTodoアプリ</title>
    <link rel="stylesheet" href="./styles.css">
    <script src="./index.js" type="text/javascript" defer></script>
</head>

<body>
    <div class="input-area">
        <input placeholder="TODOを入力">
        <button>追加</button>
    </div>
    <div class="incomplete-area">
        <p class="title">未完了のTODO</p>
        <ul>
            <div class="list-row">
                <li>TODOです</li>
                <button>完了</button>
                <button>削除</button>
            </div>
            <div class="list-row">
                <li>TODOです</li>
                <button>完了</button>
                <button>削除</button>
            </div>
        </ul>
    </div>
    <div class="complete-area">
        <p class="title">完了したTODO</p>
        <ul>
            <div class="list-row">
                <li>TODOでした</li>
                <button>戻す</button>
            </div>
        </ul>
    </div>
</body>

</html>
```

+ `styles.css`を編集<br>

```
body {
    font-family: sans-serif;
}

input {
    border-radius: 16px;
    border: none;
    padding: 6px 16px;
    outline: none;
}

button {
    border-radius: 16px;
    border: none;
    padding: 4px 16px;
}

button:hover {
    background-color: #ff7fff;
    color: #fff;
    cursor: pointer;
}
li {
    margin-right: 8px;
}

.input-area {
    background-color: #c1ffff;
    width: 384px;
    height: 30px;
    padding: 8px;
    margin: 8px;
    border-radius: 8px;
}

.incomplete-area {
    background-color: #c6ffe2;
    width: 400px;
    min-height: 200px; // いくつリストが入ってくるかわからないので最小限の高さを指定する
    padding: 8px;
    margin: 8px;
    border-radius: 8px;
}

.complete-area {
    background-color: #ffffe0;
    width: 400px;
    min-height: 200px; // いくつリストが入ってくるかわからないので最小限の高さを指定する
    padding: 8px;
    margin: 8px;
    border-radius: 8px;
}

.title {
    text-align: center;
    margin-top: 0;
    padding-top: 8px;
    font-weight: bold;
    color: #666;
}

.list-row {
    display: flex;
    align-items: center; // 横一列の高さが合う
    display: inline-block;
    padding-bottom: 4px;
}
```

## タスクの追加機能(テキスト)

+ `index.html`を編集<br>

```
<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScriptのみでTodoアプリ</title>
    <link rel="stylesheet" href="./styles.css">
    <script src="./index.js" type="text/javascript" defer></script>
</head>

<body>
    <div class="input-area">
        <input id="add-text" placeholder="TODOを入力">
        <button id="add-button">追加</button>
    </div>
    <div class="incomplete-area">
        <p class="title">未完了のTODO</p>
        <ul id="incomplete-list">
            <div class="list-row">
                <li>TODOです</li>
                <button>完了</button>
                <button>削除</button>
            </div>
            <div class="list-row">
                <li>TODOです</li>
                <button>完了</button>
                <button>削除</button>
            </div>
        </ul>
    </div>
    <div class="complete-area">
        <p class="title">完了したTODO</p>
        <ul>
            <div class="list-row">
                <li>TODOでした</li>
                <button>戻す</button>
            </div>
        </ul>
    </div>
</body>

</html>
```

+ `index.js`を編集<br>

```
const onClickAdd = () => {
    // テキストボックスの値を取得し
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = ""; // テキストボックスを初期化

    // div生成
    const div = document.createElement('div');
    div.className = "list-row"; // divタグにclass="list-row"を付与する

    // liタグ生成
    const li = document.createElement('li');
    li.innerText = inputText; // liタグに入力した値を格納する

    // divタグの子要素に各要素を設定
    div.appendChild(li);

    // 未完了のリストに追加(id="incomplete-list"の子要素に設定)
    document.getElementById('incomplete-list').appendChild(div);
};

document.getElementById("add-button").addEventListener('click', () => onClickAdd());
```
