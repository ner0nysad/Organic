const swiper = new Swiper(".swiper", {
  loop: true,
  allowTouchMove: false,

  pagination: {
    el: ".testimonial__swiper__pagination",
    type: "bullets",
    clickable: true,
    bulletClass: "testimonial__swiper__bullet",
    bulletActiveClass: "testimonial__swiper__bullet-active",
    renderBullet: function (index, className) {
      return '<div class="' + className + '"></div>';
    },
  },

  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  speed: 1000,
});
