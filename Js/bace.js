(function (window) {
    function Bace(option) {
        this.csx = option.csx;
        this.cansW = option.cansW / 2;
        this.cansH = option.cansH / 2;
        this.firsTime = new Date();
    }
    // 原型对象
    Bace.prototype = {
        constructor: Bace,
        // 图片加载
        imgLoad: function (imgs, callback) {
            var objImg = {};
            var index = 0;
            for (var i = 0; i < imgs.length; i++) {
                var img = new Image();
                img.src = 'Images/' + imgs[i];
                objImg[imgs[i]] = img;
                img.onload = function () {
                    index++;
                    if (index == imgs.length) {
                        return callback(objImg);
                    }
                }
            };
        },
        // 游戏结束字体
        gameOver: function () {
            var text = 'Game Over!';
            this.csx.save();
            this.csx.font = '80px 草书';
            this.csx.lineWidth = 10;
            var width = this.csx.measureText(text).width / 2;
            this.csx.strokeStyle = 'yellow';
            this.csx.fillStyle = 'red';
            this.csx.strokeText(text, this.cansW - width, this.cansH);
            this.csx.fillText(text, this.cansW - width, this.cansH);
            this.csx.restore();
        },
        // 时间记录字体
        yourTime: function () {
            var durent = (new Date() - this.firsTime) / 1000;
            var h = Math.floor(durent / 3600);
            var m = Math.floor(durent / 3600 % 60);
            var s = Math.floor(durent % 60);
            var text = h + '时 ' + m + '分 ' + s + '秒';
            this.csx.save();
            this.csx.font = '20px 草书';
            this.csx.fillStyle = 'red';
            this.csx.textAlign = 'right';
            this.csx.textBaseline='top';
            this.csx.fillText(text, 800, 0);
            this.csx.restore();
        }
    }

    window.Bace = Bace;
})(window)