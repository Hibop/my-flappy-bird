(function (window) {
    function Birds(option) {
        this.csx = option.csx;
        this.Image = option.Image;
        this.picW = this.Image.width / 3;
        this.picH = this.Image.height;
        this.maxAngle = option.maxAngle;
        this.x = option.x;
        this.y = option.y;
        this.index = 0;
        // 加速
        this.acc = 0.0002;
        // 起始速度
        this.v = 0;
        // 移动的距离
        this.s = 0;
        // 最大的速度
        this.maxSpeed = 0.42;
        // 过去事件
        this.firstTime = new Date();
    }

    Birds.prototype = {
        constructor: Birds,
        // 基本运动
        Draw: function () {
            this.accelerate();
            this.accRotate();            
            this.index++;
            if (this.index == 3) {
                this.index = 0;
            }
        },
        // 逐渐加速落下
        accelerate: function () {
            var lastTime = new Date();
            var newTime = lastTime - this.firstTime;
            this.firstTime = lastTime;
            // 公式: v = v + t * acc
            // s = v * t + acc * t * t / 2
            this.v = this.v + newTime * this.acc;
            this.s = this.v * newTime + newTime * this.acc * newTime / 2;
            this.y += this.s;
        },
        // 逐渐落下是旋转
        accRotate: function () {
            //  r = maxr / maxacc * v
            var angle = this.maxAngle / this.maxSpeed * this.v;
            this.csx.save();
            this.csx.translate(this.x + this.picW / 2, this.y + this.picH / 2);
            this.csx.rotate(this.Deg(angle));
            this.csx.drawImage(this.Image, this.picW * this.index, 0, this.picW, this.picH,
            -this.picW / 2, -this.picH / 2, this.picW, this.picH);
            this.csx.restore();
        },
        // 注册事件
        mouseDown: function () {
            var that = this;
            window.onmousedown = function () {
                that.v = -that.maxSpeed / 3;
            }
        },
        // 计算角度
        Deg: function (deg) {
            return Math.PI / 180 * deg;
        }
    }

    window.Birds = Birds;
})(window)