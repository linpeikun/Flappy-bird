/**
 * Created by Administrator on 2017/7/5.
 */
var Land = function (img, x, speed, ctx) {
    this.img = img; //图片资源
    this.x = x; //坐标
    this.speed = speed; //速度
    this.ctx = ctx; //绘图环境
}
Land.prototype.draw = function () {
    this.ctx.drawImage(
        this.img, this.x, 488
    )
}
//用来设置无缝滚动
Land.prototype.setCount = function (count) {
    Land.count = count;
}

Land.prototype.update = function (dur) {
    this.x = this.x + this.speed * dur;
    if (this.x < -336) {
        this.x = this.x + Land.count * 336; //无缝滚动的实现：当向左移动了一整张图片后立刻切回第一张图片
    }
}
