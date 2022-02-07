'use strict';
/*
네비게이션바를 스크롤링 하면,
폰트 크기, 박스 크기, 줄어들면서 위치에 안착되도록 하기
*/

// 스크롤 하면 폰트의 사이즈가 줄어드는 이벤트 만들어보기
// 갑자기 아래 쪽으로 스냅이 되는 문제를 해결해야할 것 같음

let titleText = document.getElementById('title');
let screenNav = document.querySelector('.screen-nav');

let defaultTitleTextSize = 300;
let scrollValue;

// 스크롤 -> 텍스트 사이즈 줄여주기
titleText.style.fontSize = `${defaultTitleTextSize}px`;

const titleScroll = function(windowValue) {
    // 기본 값으로 scroll 값 설정하고,
    // 일정 값까지 가기 전까지는 쭉 빼주고, 나머지는 값 저장하기
    scrollValue = windowValue.path[1].scrollY;

    if(scrollValue < 100) {
        titleText.style.fontSize = `${defaultTitleTextSize}px`;
    } else if(scrollValue > 100 && scrollValue < 300) {
        titleText.style.fontSize = `${defaultTitleTextSize-scrollValue}px`;
    }
    // console.log(scrollValue);
};

// 네비게이션 자체의 height를 쭉 줄이기

const navHeight = function(windowValue) {
    scrollValue = windowValue.path[1].scrollY;
    console.log(screenNav.style);
}

window.addEventListener('scroll', titleScroll);
window.addEventListener('scroll', navHeight);
