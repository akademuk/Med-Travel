class LeadingDoctors {
    constructor() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.init();
            });
        } else {
            this.init();
        }
    }

    init() {
        if (typeof Swiper === 'undefined') {
            return;
        }

        const sliderElement = document.querySelector('.leading-doctors__slider');
        if (!sliderElement) {
            return;
        }

        const wrapper = sliderElement.querySelector('.leading-doctors__wrapper');
        const slides = sliderElement.querySelectorAll('.leading-doctors__slide');

        if (!wrapper || !slides.length) {
            return;
        }

        this.setupSliderClasses(sliderElement, wrapper, slides);
        this.initializeSwiper(sliderElement);
    }

    setupSliderClasses(sliderElement, wrapper, slides) {
        sliderElement.classList.add('swiper');
        wrapper.classList.add('swiper-wrapper');
        slides.forEach(slide => slide.classList.add('swiper-slide'));
    }

    initializeSwiper(sliderElement) {
        try {
            new Swiper(sliderElement, {
                slidesPerView: "auto",
                spaceBetween: 24,
                grabCursor: true,
                navigation: {
                    nextEl: '.leading-doctors__navigation-btn.next-btn',
                    prevEl: '.leading-doctors__navigation-btn.prev-btn',
                }
            });
        } catch (error) {
            // Silent fail
        }
    }
}

export default LeadingDoctors;
