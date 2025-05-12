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
const tabs = document.querySelectorAll('.tab li');
  const tabContents = document.querySelectorAll('.tabcontent');

  tabs.forEach(tab => {
    tab.addEventListener('click', function () {
      const target = this.getAttribute('data-tab');

      // 모든 탭에서 current 제거
      tabs.forEach(t => t.classList.remove('current'));

      // 모든 콘텐츠에서 current 제거
      tabContents.forEach(c => c.classList.remove('current'));

      // 현재 클릭된 탭과 연결된 콘텐츠에 current 클래스 추가
      this.classList.add('current');
      document.getElementById(target).classList.add('current');
    });
  });
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 0,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
    centeredSlides: true,
    speed: 3000,
    autoplay: {
        delay: 0,
        disableOnInteraction: false
    },
    slidesPerView: 'auto',
});
