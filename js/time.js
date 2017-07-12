/**
 * Created by Administrator on 2017/7/5.
 */
var Time = function (ctx, origtime) {
    this.ctx = ctx;
    this.origtime = origtime - 0;
    this.begintime = origtime - 0;
}
Time.prototype.draw = function (interval) {
    this.origtime += interval;
    var ge = (this.origtime - this.begintime) / 1000;
    var txt = Math.floor(ge / 60) + "分" + Math.floor(ge % 60) + "秒";
    this.ctx.font = "30px 微软雅黑";
    this.ctx.fillText(txt, 10, 80);
}