let imgBox = document.querySelector('.img-box');
let imgWrap = document.querySelector('.img-wrap');
let originalImg = document.getElementById("originals");
let line = document.getElementById('line');

originalImg.style.width = imgBox.offsetWidth + "px";
let leftSpace = imgBox.offsetLeft;

imgBox.addEventListener("mousemove", (e) => {
    let boxWidth = (e.pageX - leftSpace) + "px";
    imgWrap.style.width = boxWidth;
    line.style.left = boxWidth;
});