
















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
    // loopedSlides: 1,
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
      dragSize: 150,
    },
    autoplay: {
        delay: 5000,
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



// const bestItemSwiper = new Swiper('.best_item .swiper', {
//     loop: true,
//     loopedSlides: null,
//     loopFillGroupWithBlank: false,
//     slidesPerView: 5,
//     slidesPerGroup: 1,
//     observer: true,
//     observeParents: true,
//     spaceBetween: 24,
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
//     autoplay: {
//         delay: 2500,
//     },
//     minimumVelocity: 10
// });  // best item list




const flowerSwiper = new Swiper('.flower .swiper', {
    loop: true,
    loopedSlides: null,
    loopFillGroupWithBlank: false,
    slidesPerView: 3,
    slidesPerGroup: 3,
    observer: true,
    observeParents: true,
    spaceBetween: 24,
    autoplay: {
        delay: 5000,
    },
    pagination: {                // 인디케이터 클릭이동
        el: '.flower .swiper-pagination',
        clickable: true
    },
});  // edition flower


const signatureSwiper = new Swiper('.signature .swiper', {
    loop: true,
    loopedSlides: null,
    loopFillGroupWithBlank: false,
    slidesPerView: 3,
    slidesPerGroup: 3,
    observer: true,
    observeParents: true,
    spaceBetween: 24,
    autoplay: {
        delay: 5400,
    },
    pagination: {                // 인디케이터 클릭이동
        el: '.signature .swiper-pagination',
        clickable: true,
    },
});  // edition signature








/* 동영상 백그라운드 제이쿼리 */
$(function(){

    jQuery("#DEMETER_Video").YTPlayer({
        videoURL:'8Dwlku4LEkA',                   // 동영상주소
        // videoURL:'https://youtu.be/8Dwlku4LEkA',                   // 동영상주소
        containment:'.movieBg_play',                   // 선택자
        autoPlay:true,                            // 자동재생 (음소거가 true인 경우에만 가능함)
        mute:true,                                // 음소거여부
        startAt:0,                                // 동영상이 시작되어야 하는 초
        opacity:1,                                // 불투명도
        showControls: false,                      // 영상 컨트롤(재생바 등) 표시여부
        playOnlyIfVisible: true                   // 해당 화면 밖에 있을때, 일시 중지 
    });

})





const aromaSwiper = new Swiper('.aroma_category .swiper', {
    loop: true,
    loopedSlides: null,
    loopFillGroupWithBlank: false,
    slidesPerView: 6,
    slidesPerGroup: 1,
    observer: true,
    observeParents: true,
    spaceBetween: 24,
    autoplay: {
        delay: 5400,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});  // edition signature





const snsSwiper = new Swiper('.sns_banner .swiper', {
    loop: true,
    loopedSlides: null,
    loopFillGroupWithBlank: false,
    slidesPerView: 1,
    slidesPerGroup: 1,
    observer: true,
    observeParents: true,
    spaceBetween: 24,
    autoplay: {
        delay: 7000,
    },
    pagination: {                // 인디케이터 클릭이동
        el: '.sns_banner .swiper-pagination',
        clickable: true,
    },
});  // edition signature




/* top_btn */
const topBtn = document.querySelector('.Quick_top_box')

topBtn.addEventListener('click', () => {
  gsap.to(window, 0.8, {
    scrollTo: 0
  })
})


/* down_btn */
const downBtn = document.querySelector('.Quick_bottom_box')

downBtn.addEventListener('click', () => {
    gsap.to(window, 0.8, {
    //   scrollTo: (0, 5700)
      scrollTo: 5700
    })
})




const ID = 'green'
const PW = '1234'

let userId = document.querySelector('#id_text')
let userPw = document.querySelector('#password_text')

let Id_Box = document.getElementById('#ID_box')
let Pw_Box = document.getElementById('#PW_box')

window.onload = function () {
    userId.focus()
}

function IDfo() {
    document.getElementById("ID_box").style.borderColor = '#cf82df';
    document.getElementById("ID_box").style.borderWidth = '2px';
}
function IDfo_n() {
    document.getElementById("ID_box").style.borderColor = '#ccc';
    document.getElementById("ID_box").style.borderWidth = '1px';
}

function PWfo() {
    document.getElementById("PW_box").style.borderColor = '#cf82df';
    document.getElementById("PW_box").style.borderWidth = '2px';
}
function PWfo_n() {
    document.getElementById("PW_box").style.borderColor = '#ccc';
    document.getElementById("PW_box").style.borderWidth = '1px';
}


document.getElementById('login_Btn').onclick = function() {
    if(userId.value == ID && userPw.value == PW ) {
        alert('로그인 되었습니다');
        window.open("/index.html", "_self",);
    } else if(userId.value != ID && userPw.value != PW) {
        alert('존재하지 않는 아이디입니다');
        userId.value = ''
        userPw.value = ''
        userId.focus()
    } else if(userId.value === ID && userPw.value != PW) {
        alert('비밀번호를 다시 확인해주세요');
        userPw.value = ''
        userPw.focus()
    } else {
        alert('아이디와 비밀번호를 다시 확인해주세요');
        userId.value = ''
        userPw.value = ''
        userId.focus()
    }
}





