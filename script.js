  //top버튼//
   const topbtn = document.getElementById("topbtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      topbtn.classList.add("show");
    } else {
      topbtn.classList.remove("show");
    }
  });

  topbtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
//intro//
 const video = document.getElementById('myVideo');

  let hasPlayedOnce = false;
  let isHovering = false;
  let isLooping = false;

  // 마지막 반복 구간 설정 (예: 마지막 3초 반복)
  let loopStart = 8;
  let loopEnd = 14;

  // 첫 페이지 진입 시 전체 재생
  window.addEventListener('load', () => {
    video.play().then(() => {
      // 재생 완료 후 마지막 구간 반복 시작
      video.addEventListener('ended', () => {
        hasPlayedOnce = true;

        loopEnd = video.duration;
        loopStart = video.duration - 7; // 마지막 3초 구간

        startLoop();
      });
    }).catch(err => {
      console.error('자동 재생 실패:', err);
    });
  });

  // timeupdate로 반복 감시
  video.addEventListener('timeupdate', () => {
    if (isLooping && !isHovering && video.currentTime >= loopEnd) {
      video.currentTime = loopStart;
    }
  });

  // 반복 재생 시작
  function startLoop() {
    isLooping = true;
    isHovering = false;
    video.currentTime = loopStart;
    video.play();
  }

  // 반복 재생 중단 후 처음부터 재생
  function playFromBeginning() {
    isLooping = false;
    isHovering = true;
    video.currentTime = 0;
    video.play();
  }

  // 마우스 오버 시: 처음부터 재생
  video.parentElement.addEventListener('mouseenter', () => {
    if (hasPlayedOnce) {
      playFromBeginning();
    }
  });

//프로필//
const buttons = document.querySelectorAll(".card-buttons button");
const sections = document.querySelectorAll(".card-section");
const card = document.querySelector(".card");

const handleButtonClick = e => {
  const targetSection = e.target.getAttribute("data-section");
  const section = document.querySelector(targetSection);
  targetSection !== "#about" ?
  card.classList.add("is-active") :
  card.classList.remove("is-active");
  card.setAttribute("data-state", targetSection);
  sections.forEach(s => s.classList.remove("is-active"));
  buttons.forEach(b => b.classList.remove("is-active"));
  e.target.classList.add("is-active");
  section.classList.add("is-active");
};

buttons.forEach(btn => {
  btn.addEventListener("click", handleButtonClick);
});

//모달//
  document.addEventListener("DOMContentLoaded", function () {
    const modalTriggers = document.querySelectorAll(".modal-trigger");
    const modals = document.querySelectorAll(".modal-section");
    const modalCloseButtons = document.querySelectorAll(".modal-close");

    // 이미지 클릭 시 해당 모달 열기
    modalTriggers.forEach(trigger => {
      trigger.addEventListener("click", function () {
        const targetId = this.getAttribute("data-modal");
        const targetModal = document.getElementById(targetId);
        if (targetModal) {
          targetModal.style.display = "flex";
          document.body.style.overflow = "hidden"; // 스크롤 방지
        }
      });
    });

    // 닫기 버튼 클릭 시 모달 닫기
    modalCloseButtons.forEach(button => {
      button.addEventListener("click", function () {
        const modal = this.closest(".modal-section");
        if (modal) {
          modal.style.display = "none";
          document.body.style.overflow = ""; // 스크롤 복원
        }
      });
    });

    // 모달 바깥 영역 클릭 시 모달 닫기
    modals.forEach(modal => {
      modal.addEventListener("click", function (event) {
        if (event.target === modal) {
          modal.style.display = "none";
          document.body.style.overflow = ""; // 스크롤 복원
        }
      });
    });
  });