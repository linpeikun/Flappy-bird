/**
 * Created by q1243 on 2017/7/4.
 */
var Sky = function (img, x, speed, ctx) {
    this.img = img; //图片资源
    this.ctx = ctx; //绘图环境
    this.x = x; //坐标
    this.speed = speed; //速度
}
Sky.prototype.draw = function () {
    this.ctx.drawImage(
        this.img, this.x, 0
    )
}
//用来设置无缝滚动
Sky.prototype.setCount = function (count) {
    Sky.count = count;
}
Sky.prototype.update = function (dur) {
    this.x = this.x + this.speed * dur;
    if (this.x < -800) { //天空图片的宽度是800
        this.x = Sky.count * 800 + this.x;  //当向左移动了一整张图片后立刻切回第一张图片
    }

}