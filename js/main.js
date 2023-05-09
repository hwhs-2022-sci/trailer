
var canvas = new fabric.Canvas("main")
canvas.setHeight(350);
canvas.setWidth(900);

var bgImg = new fabric.Image(document.getElementById("background"), {
  name: `底圖`,
  top: 0,
  left: 0,
})

canvas.setBackgroundImage(bgImg, function () {
  let img = canvas.backgroundImage;
  img.originX = 'left';
  img.originY = 'top';
  canvas.renderAll();
});

const imgset = document.getElementById("imgset")
let movingImage
let imgDragOffset = {
  offsetX: 0,
  offsetY: 0,
}
function saveImg(e) {
  if (e.target.tagName.toLowerCase() === 'img') {
    // 這邊先計算點擊圖片的何處，等滑鼠放開後要重新計算起始座標
    imgDragOffset.offsetX = e.clientX - e.target.offsetLeft
    imgDragOffset.offsetY = e.clientY - e.target.offsetTop
    movingImage = e.target
  }
}
imgset.addEventListener('click', saveImg)
function dropImg(e) {

  const { offsetX, offsetY } = e.e
  console.log(movingImage)
  const image = new fabric.Image(movingImage, {
    width: movingImage.naturalWidth,
    height: movingImage.naturalHeight,


    top: offsetY - imgDragOffset.offsetY, // 計算起始位置
    left: offsetX - imgDragOffset.offsetX
  })
  canvas.add(image)
}

canvas.on('drop', dropImg)