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

    // button(完了)タグ作成
    const completeButton = document.createElement('button');
    completeButton.innerText = '完了';
    completeButton.addEventListener("click", () => {
        alert('完了');
    });

    // button(削除)タグ作成
    const deleteButton = document.createElement('button');
    deleteButton.innerText = '削除';
    deleteButton.addEventListener("click", () => {
        // 押された削除ボタンの親タグ(div list-row)を未完了リストから削除
        const deleteTarget = deleteButton.parentNode; // 親要素を取得できる
        document.getElementById('incomplete-list').removeChild(deleteTarget); // incomplete-listの子要素を削除できる
    })

    // divタグの子要素に各要素を設定
    div.appendChild(li);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);

    // 未完了のリストに追加(id="incomplete-list"の子要素に設定)
    document.getElementById('incomplete-list').appendChild(div);
};

document.getElementById("add-button").addEventListener('click', () => onClickAdd());
