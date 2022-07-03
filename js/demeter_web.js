


const searchBox = document.querySelector('#search')

searchBox.addEventListener('focus', () => {
    searchBox.setAttribute('width', '200px')
    searchBox.setAttribute('placeholder', '검색어를 입력해주세요')
            // Element.setAttribute()  지정된 요소의 속성 값을 설정. 속성이 이미 있는 경우 값 업데이트
            // 그렇지 않으면 지정된 이름과 값으로 새 속성 추가
})

searchBox.addEventListener('blur', () => {
    searchBox.setAttribute('placeholder', '')
    searchBox.setAttribute('value', '')
})




$(function () {

    $('.lnb').mouseover(function () {
        $(".Menu_list").css("height", "200px");
    });

    $('.lnb').mouseleave(function () {
        $(".Menu_list").css("height", "0px");
    });


}) // lnb



const mainVisualSwiper = new Swiper(".main_visual .swiper", {
    loop: true,           // 마지막장 연결 
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    // pagination: {
    //   el: ".swiper-pagination",
    // },
    scrollbar: {
      el: '.swiper-scrollbar',
      snapOnRelease: true,
      draggable: true,
    },
    autoplay: {
        delay: 1000,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});  // main_visual
        



const HeartBtns = document.querySelectorAll('.xi-heart-o')

HeartBtns.forEach((HeartBtn) => {
    HeartBtn.addEventListener('click', function() {
        HeartBtn.classList.toggle('xi-heart')
        HeartBtn.classList.toggle('xi-heart-o')
    })
})  // heart




const newItemSwiper = new Swiper('.new_item .swiper', {
    loop: true,
    loopedSlides: null,
    slidesPerView: 5,
    slidesPerGroup: 1,
    observer: true,
    observeParents: true,
    spaceBetween: 24,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 2000,
    },
});  // new item list



const bestItemSwiper = new Swiper('.best_item .swiper', {
    loop: true,
    loopedSlides: null,
    loopFillGroupWithBlank: false,
    slidesPerView: 5,
    slidesPerGroup: 1,
    observer: true,
    observeParents: true,
    spaceBetween: 24,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 2500,
    },
});  // new item list






