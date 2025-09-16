const swiper = new Swiper('.swiper', {
    loop: true, // วนลูป
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    effect: 'slide', // 'slide', 'cube', 'coverflow'
  });