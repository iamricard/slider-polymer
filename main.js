(function(Polymer){
  'use strict';

  new Polymer('slider-component', {
    ready: function() {
      this.images = Array.prototype.slice.call(this.querySelectorAll('img'));

      if (!this.start && parseInt(this.start, 10) !== 0) {
        this.start = 0;
        this.current = parseInt(this.start, 10);
      }

      var container = this.$.container;

      for (var img in this.images) {
        var currentImg = parseInt(img, 10);

        this.images[currentImg].classList.add('slider-img');

        container.appendChild(this.images[img]);
      }
    },

    slide: function(evt) {
      var next = evt.target.dataset.img;
      this.current = parseInt(this.current, 10);
      switch (next) {
        case 'left':
          this.images[this.current].classList.add('left-slider');
          this.current = this.current === 0 ? this.images.length - 1 : this.current - 1;
          this.images[this.current].classList.remove('right-slider');
          this.images[this.current].classList.remove('left-slider');
          break;
        case 'right':
          this.images[this.current].classList.add('right-slider');
          this.current = this.current === this.images.length - 1 ? 0 : this.current + 1;
          this.images[this.current].classList.remove('right-slider');
          this.images[this.current].classList.remove('left-slider');
          break;
        default:
          this.images[this.current].classList.remove('show');
          this.current = next;
          this.images[this.current].classList.add('show');
          break;
      }

      this.applyAccent();
    },

    applyAccent: function() {
      //
    }
  });

})(window.Polymer);
