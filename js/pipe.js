/**
 * Created by Administrator on 2017/7/5.
 * 管道的构造函数及运动函数
 */
var Pipe = function (upImg, downImg, x, speed, ctx) {
    this.x = x;
    this.upImg = upImg;
    this.downImg = downImg;
    this.speed = speed;
    this.ctx = ctx;
    this.r = Math.random() * 200 + 100;  //随机高度+固定高度

    // this.wid = Math.random() * 50 + 100; //管道间距随机100-150
}
//上下管道的绘制
Pipe.prototype.draw = function () {
    this.ctx.drawImage(
        this.upImg, this.x, this.r - 420    //管道图片的长度是420
    )
    this.ctx.drawImage(
        this.downImg, this.x, this.r + 150    //管道中间的留白是150px
        // this.downImg, this.x, this.r + this.wid
    )
}
Pipe.prototype.setCount = function (count, gap) {
    Pipe.count = count;
    Pipe.gap = gap;        //这里是这次绘制的特别之处，加入了间隔
}
Pipe.prototype.update = function (dur) {
    this.x = this.x + this.speed * dur;
    if (this.x < -52) {    //管道宽度52px
        this.x = this.x + Pipe.count * Pipe.gap;   //无缝滚动
        this.r = Math.random() * 200 + 150;     //切换后的管道必须重新设置一个高度，给用户一个新管道的错觉
        //更新通过的管道数目
        document.getElementById("num").innerHTML = parseInt(document.getElementById("num").innerHTML) + 1;
    }
}

//每次重绘管道都判断是否碰撞管道
Pipe.prototype.hitTest = function(x,y){ //x和y为小鸟的运动轨迹
    return (x > this.x && x < this.x + 52)    //在管子横向中间
        &&(! (y >this.r  && y < this.r +150));  //在管子竖向中间
}

