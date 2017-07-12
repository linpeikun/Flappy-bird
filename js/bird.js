/**
 * Created by Administrator on 2017/7/4.
 */
var Bird = function (img, x, y, speed, a, ctx) {
    this.img = img; //图源
    this.x = x; //x坐标
    this.y = y; //y坐标
    this.speed = speed; //速度
    this.a = a; //下落加速度
    this.ctx = ctx; //绘图环境
    this.index = 0;    //用于制作小鸟扇翅膀的动作
}
Bird.prototype.draw = function () {
    this.ctx.save(); //保存了ctx当前的状态值
    this.ctx.translate(this.x, this.y); //平移
    this.ctx.rotate((Math.PI / 6) * this.speed / 0.3); //旋转
    this.ctx.drawImage(
        this.img,   //图片资源,
        52 * this.index, 0, //原图的裁切起点，
        52, 45,  // 原图的宽和高，
        -52 / 2, -45 / 2, // 贴到画布上的位置，
        52, 45  // 贴到画布上的宽高
    )
    this.ctx.restore(); //将ctx之前的状态值还原回去
}
var durgather = 0;
Bird.prototype.update = function (dur) { //刷新
    durgather += dur;
    if (durgather > 100) {
        this.index++;
        if (this.index === 2) {//循环切换三张图，实现小鸟翅膀抖动效果
            this.index = 0;
        }
        durgather -= 100;
    }
    this.speed = this.speed + this.a * dur; //小鸟的速度v=v+gt
    this.y = this.y + this.speed * dur; //小鸟下落
}