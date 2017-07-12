/**
 * Created by Administrator on 2017/7/4.
 * 保证图片资源加载完成后再执行其他操作，每加载一张图片我们让imgCount--，减到0的时候再执行主函数；
 */
function load(source, callback) {
    var imgEls = {}; //存放图片资源的数组
    var imgCount = source.length; //获取图片数量
    for (var i = 0; i < imgCount; i++) { //获取每个图片资源
        var name = source[i].name;
        var newImg = new Image(); //定义一个Image对象
        newImg.src = source[i].src;
        imgEls[name] = newImg;
        imgEls[name].addEventListener("load", function () {
            imgCount--; //加载一张图片则imgCount减一
            if (imgCount == 0) {
                callback(imgEls); //全部加载完，执行主函数
            };
        })
    };
};
