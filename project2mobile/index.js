document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const sideMenu = document.querySelector('.side-menu');
  const closeBtn = document.querySelector('.close-btn');

  menuToggle.addEventListener('click', () => {
    sideMenu.classList.add('open');
  });

  closeBtn.addEventListener('click', () => {
    sideMenu.classList.remove('open');
  });

  // 사이드 메뉴 서브메뉴 토글
  const sideMenuItems = document.querySelectorAll('.side-menu-item > a');
  sideMenuItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const parent = item.parentElement;
      parent.classList.toggle('active');
    });
  });
});

//신규입고//

    new Swiper(".mySwiper1", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: { delay: 4000, disableOnInteraction: false },
      pagination: { el: ".mySwiper1 .swiper-pagination", clickable: true }
    });

//29매거진//

    new Swiper(".mySwiper2", {
      grabCursor: true,
      loop: true,
      effect: "creative",
      creativeEffect: {
        prev: { shadow: true, translate: [0, 0, -400] },
        next: { translate: ["100%", 0, 0] },
      }
    });

//브랜드배너//

    new Swiper(".mySwiper3", {
      slidesPerView: 1,
      spaceBetween: 170,
      loop: true,
      centeredSlides: true,
      speed: 4000,
      autoplay: { delay: 0, disableOnInteraction: false },
      slidesPerView: "auto",
      pagination: { el: ".mySwiper3 .swiper-pagination", clickable: true },
      breakpoints: {
        320: { slidesPerView: 1 },
        640: { slidesPerView: 1.5 },
        1024: { slidesPerView: 2.5 }
      }
    });

    const tabs = document.querySelectorAll('.tab li');
  const contents = document.querySelectorAll('.tabcontent');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('current'));
      tab.classList.add('current');

      const target = tab.dataset.tab;
      contents.forEach(c => {
        c.classList.toggle('current', c.id === target);
      });
    });
  });
  