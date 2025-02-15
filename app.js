let imgBox = document.querySelector('.img-box');
let imgWrap = document.querySelector('.img-wrap');
let originalImg = document.getElementById("originals");
let line = document.getElementById('line');
let changeImgBtn = document.getElementById("change-photo");
let transImg= document.getElementById("trans");

changeImgBtn.addEventListener("click",()=>{
  if(transImg.src.includes("background_change_img/transparent.png") || originalImg.src.includes("background_change_img/original.jpg") ){
    transImg.src = "background_change_img/benz-tran.png";
     originalImg.src = "background_change_img/benz-original.jpg" 
  }else{
    transImg.src = "background_change_img/transparent.png";
    originalImg.src = "background_change_img/original.jpg";   
  };    
});

originalImg.style.width = imgBox.offsetWidth + "px";
let leftSpace = imgBox.offsetLeft;

imgBox.addEventListener("mousemove", (e) => {
    let boxWidth = (e.pageX - leftSpace) + "px";
    imgWrap.style.width = boxWidth;
    line.style.left = boxWidth;
});
