


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