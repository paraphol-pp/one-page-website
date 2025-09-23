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

  const menuBtn = document.getElementById('menuBtn');
  const sidebar = document.getElementById('sidebar');
  const closeBtn = document.getElementById('closeBtn');

  menuBtn.addEventListener('click', () => {
    sidebar.classList.remove('translate-x-full');
    sidebar.classList.add('translate-x-0');
  });

  closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('translate-x-0');
    sidebar.classList.add('translate-x-full');
  });