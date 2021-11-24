const onClickAdd = () => {
    // テキストボックスの値を取得し
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = ""; // テキストボックスを初期化

    createIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除(共通化)
const deleteFromIncompleteList = (target) => {
    document.getElementById('incomplete-list').removeChild(target); // incomplete-listの子要素を削除できる
}

// 未完了リストに追加する関数(共通化)
const createIncompleteList = (text) => {
    // div生成
    const div = document.createElement('div');
    div.className = "list-row"; // divタグにclass="list-row"を付与する

    // liタグ生成
    const li = document.createElement('li');
    li.innerText = text; // liタグに入力した値を格納する

    // button(完了)タグ作成
    const completeButton = document.createElement('button');
    completeButton.innerText = '完了';

    completeButton.addEventListener("click", () => {
        // 押された削除ボタンの親タグ(div list-row)を未完了リストから削除
        deleteFromIncompleteList(completeButton.parentNode);

        // 完了リストに追加する
        const addTarget = completeButton.parentNode;

        // div.list-rowの最初の子要素のテキストが取れる
        const text = addTarget.firstElementChild.innerText;

        // div以下を初期化
        addTarget.textContent = null;

        // liタグ生成
        const li = document.createElement('li');
        li.innerText = text;

        // buttonタグ生成
        const backButton = document.createElement('button');
        backButton.innerText = '戻す';
        backButton.addEventListener('click', () => {
            // 押された戻すボタンの親タグ(div)を完了リストから削除
            const deleteTarget = backButton.parentNode;
            document.getElementById('complete-list').removeChild(deleteTarget);

            const addTarget = backButton.parentNode;

            // テキストを取得
            const text = addTarget.firstElementChild.innerText;
            createIncompleteList(text);
        });

        // divタグの子要素に各要素を設定
        addTarget.appendChild(li);
        addTarget.appendChild(backButton);

        // 完了リストに追加
        document.getElementById('complete-list').appendChild(addTarget);
    });

    // button(削除)タグ作成
    const deleteButton = document.createElement('button');
    deleteButton.innerText = '削除';
    deleteButton.addEventListener("click", () => {
        // 押された削除ボタンの親タグ(div list-row)を未完了リストから削除
        deleteFromIncompleteList(deleteButton.parentNode);
    });

    // divタグの子要素に各要素を設定
    div.appendChild(li);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);

    // 未完了のリストに追加(id="incomplete-list"の子要素に設定)
    document.getElementById('incomplete-list').appendChild(div);
}

document.getElementById("add-button").addEventListener('click', () => onClickAdd());
