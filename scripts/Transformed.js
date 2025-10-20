class Transformed {
    constructor() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.initTabs();
                this.initSliders();
            });
        } else {
            this.initTabs();
            this.initSliders();
        }
    }

    initTabs() {
        const tabButtons = document.querySelectorAll('.transformed__tab-button');
        const tabContents = document.querySelectorAll('.transformed__tab-content');

        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const tabName = button.dataset.tab;
                
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));
                
                button.classList.add('active');
                document.querySelector(`[data-content="${tabName}"]`).classList.add('active');
            });
        });
    }

    initSliders() {
        if (typeof Swiper === 'undefined') {
            return;
        }

        const sliderIds = [
            'slider-facelift',
            'slider-abdominoplasty', 
            'slider-breast',
            'slider-hair',
            'slider-rhinoplasty',
            'slider-dental'
        ];

        sliderIds.forEach(sliderId => {
            this.createSwiper(sliderId);
        });
    }

    createSwiper(sliderId) {
        const sliderElement = document.getElementById(sliderId);
        if (!sliderElement) {
            return;
        }

        const wrapper = sliderElement.querySelector('.transformed__slider-wrapper');
        const slides = sliderElement.querySelectorAll('.transformed__slider-slide');

        if (!wrapper || !slides.length) {
            return;
        }

        sliderElement.classList.add('swiper');
        wrapper.classList.add('swiper-wrapper');
        slides.forEach(slide => slide.classList.add('swiper-slide'));

        this.createNavigationButtons(sliderElement, sliderId);

        try {
            const swiper = new Swiper(sliderElement, {
                slidesPerView: "auto",
                spaceBetween: 24,
                loop: false,
                grabCursor: true,

                navigation: {
                    nextEl: `#${sliderId} .transformed__slider-btn.next-btn`,
                    prevEl: `#${sliderId} .transformed__slider-btn.prev-btn`,
                }
            });
        } catch (error) {
            // Silent error handling
        }
    }

    createNavigationButtons(sliderElement, sliderId) {
        let prevBtn = sliderElement.querySelector('.transformed__slider-btn.prev-btn');
        let nextBtn = sliderElement.querySelector('.transformed__slider-btn.next-btn');

        if (!prevBtn) {
            prevBtn = document.createElement('div');
            prevBtn.className = 'swiper-button-prev';
            sliderElement.appendChild(prevBtn);
        }

        if (!nextBtn) {
            nextBtn = document.createElement('div');
            nextBtn.className = '.transformed__slider-btn.next-btn';
            sliderElement.appendChild(nextBtn);
        }
    }
}

export default Transformed;
