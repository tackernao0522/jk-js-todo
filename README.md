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