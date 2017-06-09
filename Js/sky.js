(function (window) {
    function Sky(option) {
       this.csx = option.csx;
       this.Image = option.Image;
       this.picW = option.Image.width;
       this.x = option.x;
       this.seep = 2;
    }

    Sky.prototype = {
        constructor: Sky,
        Draw: function () {
            this.csx.drawImage(this.Image, this.x, 0);
            this.x -= this.seep;
            if (this.x <= -this.picW) {
                this.x += this.picW * 2;
            }
        }
    }

    window.Sky = Sky;
})(window)