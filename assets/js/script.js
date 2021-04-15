document.addEventListener("DOMContentLoaded", () => {
    const clientWidth = document.documentElement.clientWidth;

    const swiper = new Swiper('.swiper-container', {
        slidesPerView: clientWidth < 780 ? 1 : 2,
        centeredSlides: true,
        spaceBetween: 20,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        on: {
            init: () => {
                document.querySelector(".swiper-slide-active .card").classList.add("active")
            },
            slideChange: () => {
                let currentSlide = swiper.activeIndex
                let prevSlide = swiper.previousIndex
                prev = swiper.slides[prevSlide]
                prev.querySelector(".card").classList.remove("active")
                next = swiper.slides[currentSlide]
                next.querySelector(".card").classList.add("active")
            }
        }
    });

    document.getElementById("next").addEventListener("click",() => {
        swiper.slideNext()
    })

    document.getElementById("prev").addEventListener("click",() => {
        swiper.slidePrev()
    })
})