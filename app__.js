

'use strict';
const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    }

    console.log('current class name: ' + className);
});

document.getElementById('countId').onclick = function(){
    //選取輸入欄位的 DOM 並宣告變數名，用 value 帶出輸入欄的值。
    var hamNum = parseInt(document.getElementById('hamNumId').value);
    var cokeNum = parseInt(document.getElementById('cokeNumId').value);
    //再用一個變數儲存金額加總
    var total = hamNum - cokeNum ;
    //把總金額渲染至網頁上
    document.getElementById('countId').textContent = total;
  }

var btn = document.getElementById('Submit');

btn.addEventListener('click', function(){
console.log('HI');
}, false);

btn.addEventListener('click', function(){
console.log('HELLO');
}, false);