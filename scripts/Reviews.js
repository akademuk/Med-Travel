class Reviews {
    constructor() {
        console.log('Reviews initialized');
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.init();
            });
        } else {
            this.init();
        }
    }

    init() {
        console.log('Initializing Reviews slider...');
        
        // Check if Swiper is available
        if (typeof Swiper === 'undefined') {
            console.error('Swiper library is not loaded');
            return;
        }

        const reviewsSliderElement = document.querySelector('.reviews__slider');
        if (!reviewsSliderElement) {
            console.warn('Reviews slider element not found');
            return;
        }

        // Add swiper classes to the existing structure
        const wrapper = reviewsSliderElement.querySelector('.reviews__wrapper');
        const slides = reviewsSliderElement.querySelectorAll('.reviews__body-slide');

        if (!wrapper || !slides.length) {
            console.warn('Required reviews slider elements not found');
            return;
        }

        // Add Swiper classes to existing elements
        reviewsSliderElement.classList.add('swiper');
        wrapper.classList.add('swiper-wrapper');
        slides.forEach(slide => slide.classList.add('swiper-slide'));

        // Create navigation buttons
        this.createNavigationButtons(reviewsSliderElement);

        try {
            const reviewsSlider = new Swiper(reviewsSliderElement, {
                slidesPerView: "auto",
                spaceBetween: 24,
                grabCursor: true,
                navigation: {
                    nextEl: '.reviews__slider .swiper-button-next',
                    prevEl: '.reviews__slider .swiper-button-prev',
                },
                on: {
                    init: function() {
                        console.log('Reviews Swiper initialized successfully');
                    }
                }
            });
        } catch (error) {
            console.error('Error initializing Reviews Swiper:', error);
        }
    }

    createNavigationButtons(sliderElement) {
        // Check if navigation buttons already exist
        let prevBtn = sliderElement.querySelector('.reviews__navigation-btn.prev-btn');
        let nextBtn = sliderElement.querySelector('.reviews__navigation-btn.next-btn');

        if (!prevBtn) {
            prevBtn = document.createElement('div');
            prevBtn.className = '.reviews__navigation-btn.prev-btn';
            sliderElement.appendChild(prevBtn);
        }

        if (!nextBtn) {
            nextBtn = document.createElement('div');
            nextBtn.className = '.reviews__navigation-btn.next-btn';
            sliderElement.appendChild(nextBtn);
        }
    }
}

export default Reviews;