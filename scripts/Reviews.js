class Reviews {
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

        const reviewsSliderElement = document.querySelector('.reviews__slider');
        if (!reviewsSliderElement) {
            return;
        }

        const wrapper = reviewsSliderElement.querySelector('.reviews__wrapper');
        const slides = reviewsSliderElement.querySelectorAll('.reviews__body-slide');

        if (!wrapper || !slides.length) {
            return;
        }

        reviewsSliderElement.classList.add('swiper');
        wrapper.classList.add('swiper-wrapper');
        slides.forEach(slide => slide.classList.add('swiper-slide'));

        this.createNavigationButtons(reviewsSliderElement);

        try {
            const reviewsSlider = new Swiper(reviewsSliderElement, {
                slidesPerView: "auto",
                spaceBetween: 24,
                grabCursor: true,
                navigation: {
                    nextEl: '.reviews__slider .swiper-button-next',
                    prevEl: '.reviews__slider .swiper-button-prev',
                }
            });
        } catch (error) {
            // Silent error handling
        }
    }

    createNavigationButtons(sliderElement) {
        let prevBtn = sliderElement.querySelector('.reviews__navigation-btn.prev-btn');
        let nextBtn = sliderElement.querySelector('.reviews__navigation-btn.next-btn');

        if (!prevBtn) {
            prevBtn = document.createElement('div');
            prevBtn.className = 'reviews__navigation-btn prev-btn';
            sliderElement.appendChild(prevBtn);
        }

        if (!nextBtn) {
            nextBtn = document.createElement('div');
            nextBtn.className = 'reviews__navigation-btn next-btn';
            sliderElement.appendChild(nextBtn);
        }
    }
}

export default Reviews;
