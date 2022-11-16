const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 4,
    direction: 'horizontal',
    loop: true,
    spaceBetween: 30,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

$(function () {
    $(".guests-list").accordion({
        icons: false,
        heightStyle: "content",
        collapsible: true,
        active: false
    });
});

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.list-item').forEach(function (e) {
        e.addEventListener('click', function (e) {
            const tab = e.currentTarget.dataset.path;
            document.querySelectorAll('.tab-content').forEach(function (e) {
                e.classList.remove('tab-content--active');
                document.querySelector(`[data-target='${tab}']`).classList.add('tab-content--active');
            })
        })
    })
})
