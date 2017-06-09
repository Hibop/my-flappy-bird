(function (window) {
    function Floor(option) {
        this.csx = option.csx;
        this.Image = option.Image;
        this.picW = this.Image.width;
        this.x = option.x;
        this.y = option.y;
        this.seep = 2;
    }

    Floor.prototype = {
        constructor: Floor,
        Draw: function () {
            this.csx.drawImage(this.Image, this.x, this.y);
            this.x -= this.seep;
            if (this.x <= -this.picW) {
                this.x += this.picW * 4;
            }
        }
    }

    window.Floor = Floor;
})(window)