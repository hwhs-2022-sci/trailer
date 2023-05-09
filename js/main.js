
var canvas = new fabric.Canvas("main")
canvas.setHeight(350);
canvas.setWidth(900);

canvas.setBackgroundImage("/img/底圖.png", function () {
  canvas.renderAll();
});

function findSelection(name) {
  try {
    return document.querySelector(`[name="${name}"]:checked`).value
  } catch(e){
    return null
  }
}

$("#joinBtn").on("click", function () {

  console.log(findSelection("flexRadioDefault"))
  var imgPath =document.querySelector("#"+findSelection("flexRadioDefault"))
  var img = 
  new fabric.Image(imgPath, {
    name: ``,
    top: 50,
    left: 50,

  })
  canvas.add(img)
  canvas.renderAll()
})





fabric.Canvas.prototype.customiseControls({
  tl: {
    action: {
      'rotateByDegrees': -90
    },
    cursor:"pointer"
   
  },
  tr: {
    action: 'rotate',
    action: {
      'rotateByDegrees': 90
    },
    
    cursor:"pointer"
   
  },
  bl: {
    action: 'remove',
  
    cursor:"pointer"

  },
  br: {
    action: 'moveUp',

  },
  mb: {
    action: 'moveDown',

  },
  mt: {
    action: {
      'rotateByDegrees': 90
    }
  },
  mr: {
    action: function (e, target) {
      target.set({
        left: 200
      });
      canvas.renderAll();
    }
  },
  // only is hasRotatingPoint is not set to false
  mtr: {
    action: 'rotate',

  },
}, function () {
  canvas.renderAll();
});
fabric.Object.prototype.customiseCornerIcons({
  settings: {
      borderColor: '#0094dd',
      cornerSize: 15,
      cornerShape: 'rect',
      cornerBackgroundColor: '#ffffffac',
  },
  tl: {
    icon:"/img/arrow-counterclockwise.svg"
  },
  tr: {
    icon:"/img/arrow-clockwise.svg"
  },
  ml: {
      
  },
  mr: {
     
  },
  bl:{
    icon:"/img/trash3.svg"

  },
  // only is hasRotatingPoint is not set to false
  mtr: {
      
  },
}, function() {
  canvas.renderAll();
});

fabric.Object.prototype.setControlsVisibility({
  bl: true, // 左下
  br: false, // 右下
  mb: false, // 下中
  ml: false, // 中左
  mr: false, // 中右
  mt: false, // 上中
  tl: true, // 上左
  tr: true, // 上右
  mtr: false // 旋轉控制鍵
})
