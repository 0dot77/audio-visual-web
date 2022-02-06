'use strict';
/*
네비게이션바를 스크롤링 하면,
폰트 크기, 박스 크기, 줄어들면서 위치에 안착되도록 하기
*/

// 스크롤 하면 폰트의 사이즈가 줄어드는 이벤트 만들어보기

let text = document.getElementById('title');
// console.log(text.style);

function textSizing(e) {
    let sy = e.path[1].scrollY;
    text.style.fontSize = sy;
}

window.addEventListener('scroll', textSizing);
