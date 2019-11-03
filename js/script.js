  //创建二维绘图
  var chess = document.getElementById('chess');
  var context = chess.getContext('2d');
  //设置颜色
  context.strokeStyle = "#BFBFBF";

  //添加棋盘背景图片
  var lwj = new Image();
  lwj.src = "../images/bo.jpg"
  lwj.onload = function() {
  //图片从点0，0到450,450
  context.drawImage(lwj, 0, 0, 450, 450);
  qipan();   //调用qipan函数
  }

  //---棋盘---
  function qipan() {
    for (var i = 0; i < 15; i++ ) {
      //横线---留白15px，间隔30px
      context.moveTo(15 + i*30, 15);
      context.lineTo(15 + i*30, 435);
      context.stroke();

      //纵线---留白15px，间隔30px
      context.moveTo(15, 15 + i*30);
      context.lineTo( 435, 15 + i*30);
      //stroke() 方法会实际地绘制路径
      context.stroke();
    }
  }

  //---棋子---
  function qizi(x, y, me1) {
    context.beginPath();
    //arc() 方法创建弧/曲线---x y 半径 起点角 终点角
    context.arc(15 + x*30, 15 + y*30, 13, 0, 2 * Math.PI);
    //closePath() 方法创建从当前点到开始点的路径
    context.closePath();

    //---fill的style 创建渐变色圆---
    var gradient = context.createRadialGradient(15 + x*30 + 2, 15 + y*30 - 2, 13, 15 + x*30 + 2, 15 + y*30 - 2, 0);
    //判断棋子颜色
    if(me1) {
      gradient.addColorStop(0, "#0A0A0A");
      gradient.addColorStop(1, "#ffffff");
    } else {
      gradient.addColorStop(0, "#cccccc");
      gradient.addColorStop(1, "#ffffff");
    }
    //fill() 方法填充当前的图像（路径）
    context.fillStyle = gradient;
    context.fill();
  }

  //---限制---
  var chessLimit = [];
  for (var i = 0; i < 15; i++) {
    chessLimit[i] = [];
    for (var j = 0; j < 15; j++) {
      chessLimit[i][j] = 0;
    }
  }