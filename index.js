"use strict";

const HIDDEN_CLASS = "hidden";

const year2022 = document.querySelector(".year2022");
const indexSection = document.querySelector(".index-section");

// index 담기
const indices = document.querySelectorAll(".index-section > h3");
const descriptionSection = document.querySelector(".description-section");
const articles = document.querySelectorAll(".description-section > article");
const contentSection = document.querySelector(".content-section");
const contents = document.querySelectorAll(".content-section__contents");

// main index 클릭하면 index 팝업 + 다시 클릭하면 이전 내용들 가려주기
year2022.addEventListener("click", () => {
  if (!indexSection.classList.contains(HIDDEN_CLASS)) {
    indexSection.classList.add(HIDDEN_CLASS);
    descriptionSection.classList.add(HIDDEN_CLASS);
    contentSection.classList.add(HIDDEN_CLASS);
  } else {
    indexSection.classList.remove(HIDDEN_CLASS);
  }
});

const hiddenCheck = function (list) {
  for (let i = 0; i < list.length; i++) {
    if (!list[i].classList.contains(HIDDEN_CLASS)) {
      list[i].classList.add(HIDDEN_CLASS);
    }
  }
};

// contents index 클릭
for (let i = 0; i < indices.length; i++) {
  indices[i].addEventListener("click", () => {
    descriptionSection.classList.remove(HIDDEN_CLASS); // 설명 부분
    contentSection.classList.remove(HIDDEN_CLASS); // 콘텐츠부분
    hiddenCheck(articles);
    hiddenCheck(contents);
    articles[i].classList.remove(HIDDEN_CLASS);
    contents[i].classList.remove(HIDDEN_CLASS);
  });
}
