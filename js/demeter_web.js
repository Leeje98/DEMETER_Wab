


const searchBox = document.querySelector('#search')

searchBox.addEventListener('focus', () => {
    searchBox.setAttribute('width', '  200px')
            // Element.setAttribute()  지정된 요소의 속성 값을 설정합니다. 속성이 이미 있는 경우 값이 업데이트됩니다. 그렇지 않으면 지정된 이름과 값으로 새 속성이 추가됩니다.
})

searchBox.addEventListener('blur', () => {
    searchBox.setAttribute('placeholder', '')
})




$(function () {


    $('.lnb01').mouseover(function () {
        $(".list01").css("height", "500px");
    });

    $('.lnb01').mouseleave(function () {
        $(".list01").css("height", "0px");
    });


}) // 01