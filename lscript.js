let menuToggle = document.querySelector('.menuToggle');
let lightDark = document.querySelector('.lightDark');
let body = document.querySelector('body');
let video = document.querySelector('video');
let dark = false;
let navigation = document.querySelector('.navigation');

menuToggle.onclick = function () {
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
};

lightDark.onclick = function(){
    dark = !dark;
    lightDark.classList.toggle('active');
    body.classList.toggle('dark');

    if (dark) {
        video.setAttribute('src', "../Prodigy_WD_01/Media/nightVideo_02.mp4");
        } else {
            video.setAttribute('src', "../Prodigy_Infotech/WD_01/Media/dayVideo_01.mp4");
    }
};