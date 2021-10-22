var num = document.getElementsByTagName("img").length;
var img = document.getElementsByTagName("img");
// n存储图片加载到的位置，避免每次都从第一张图片开始遍历
var n = 0;

// 页面载入完毕，加载可视区域内的图片
lazyload();

window.onscroll = lazyload;

// 监听页面滚动事件
function lazyload() {
    // seeHeight 可见区域高度
    var seeHeight = document.documentElement.clientHeight;
    // scrollTop 滚动条距离顶部高度
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    for (var i = 0; i < num; i++) {
        if (img[i].offsetTop < seeHeight + scrollTop) {
            if (img[i].getAttribute("src") === "") {
                img[i].src = img[i].getAttribute("data-src");
            }
            n = i + 1;
        }
    }
}
