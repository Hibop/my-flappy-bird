(function (window) {
    function Pipeline(option) {
        this.csx = option.csx;
        this.topImage = option.topImage;
        this.bottomImage = option.bottomImage;
        this.picW = option.bottomImage.width;
        this.picH = option.bottomImage.height;
        this.x = option.x;
        this.y = -(150 + Math.random() * 150);
        this.step = 150;        
        this.bottomY = this.y + this.step + this.topImage.height;
        this.speed = 2;
    }

    Pipeline.prototype = {
        constructor: Pipeline,
        Draw: function () {
            // 障碍部分
            this.csx.rect(this.x - 10, this.y + 10, this.picW + 20, this.picH);
            this.csx.rect(this.x - 10, this.bottomY - 10, this.picW + 20, this.picH);
            // 图形部分
            this.csx.drawImage(this.topImage, this.x, this.y);
            this.csx.drawImage(this.bottomImage, this.x, this.bottomY);
            this.x -= this.speed;
            if (this.x <= -this.picW) {
                this.x += 200 * 6;
                this.y = -(150 + Math.random() * 150);
                this.bottomY = this.y + this.step + this.bottomImage.height;
            }
        }
    }

    window.Pipe = window.Pipeline = Pipeline;
})(window)