//赢法数组
var wins = [];
var count = 0;

for (var i = 0; i < 15; i++) {
  wins[i] = [];
  for (var j = 0; j < 15; j++) {
    wins[i][j] = [];
  }
}
//横线所有赢法
for (var i = 0; i < 15; i++) {
  for (var j = 0; j < 11; j++) {
    for (var k = 0; k < 5; k++) {
      wins[i][j+k][count] = true;
    }
  count++;
  }
}
//竖线所有赢法
for (var i = 0; i < 15; i++) {
  for (var j = 0; j < 11; j++) {
    for (var k = 0; k < 5; k++) {
      wins[j+k][i][count] = true;
    }
  count++;
  }
}
//斜线所有赢法
for (var i = 0; i < 11; i++) {
  for (var j = 0; j < 11; j++) {
    for (var k = 0; k < 5; k++) {
      wins[i+k][j+k][count] = true;
    }
  count++;
  }
}
//反斜线所有赢法
for (var i = 0; i < 11; i++) {
  for (var j = 14; j > 3; j--) {
    for (var k = 0; k < 5; k++) {
      wins[i+k][j-k][count] = true;
    }
  count++;
  }
}

//打印count看看总共有几种赢法
// console.log(count);

//棋子的统计数组
var myWin = [];
var youWin = [];

for (var i = 0; i < count; i++) {
  myWin[i] = 0;
  youWin[i] = 0;
}

//---实现下棋，为chess绑定onclick事件
var me = true;
var over = false;

chess.onclick = function(e) {
  if(over) {
    return;
  }
  //棋盘坐标
  var x = e.offsetX;
  var y = e.offsetY;

  //棋子索引算法x除以30 然后向下取整
  var i = Math.floor(x / 30);
  var j = Math.floor(y / 30);
  //下棋时判断(limit)
  if (chessLimit[i][j] == 0) {
    qizi(i, j, me);
  if(me) {
    //黑棋赢法
    chessLimit[i][j] = 1;
    for(var k=0; k<count; k++) {
      if(wins[i][j][k]) {
        myWin[k]++;
        if(myWin[k] == 5) {
          window.alert("黑棋赢");
          over = true;
        }
      }
    }
  } else { 
    //白棋赢法
    chessLimit[i][j] = 2;
    for(var k=0; k<count; k++) {
      if(wins[i][j][k]) {
        youWin[k]++;
        if(youWin[k] == 5) {
          window.alert("白棋赢");
          over = true;
        }
      }
    }
  }
     me = !me;
  }
}
