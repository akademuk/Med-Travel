class Transformed {
    constructor() {
        console.log('Transformed initialized');
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
        console.log('Initializing Swiper sliders...');
        
        // Check if Swiper is available
        if (typeof Swiper === 'undefined') {
            console.error('Swiper library is not loaded');
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
        console.log('All Swiper sliders initialized');
    }

    createSwiper(sliderId) {
        const sliderElement = document.getElementById(sliderId);
        if (!sliderElement) {
            console.warn(`Slider element with ID "${sliderId}" not found`);
            return;
        }

        // Add swiper classes to the existing structure
        const wrapper = sliderElement.querySelector('.transformed__slider-wrapper');
        const slides = sliderElement.querySelectorAll('.transformed__slider-slide');

        if (!wrapper || !slides.length) {
            console.warn(`Required slider elements not found for "${sliderId}"`);
            return;
        }

        // Add Swiper classes to existing elements
        sliderElement.classList.add('swiper');
        wrapper.classList.add('swiper-wrapper');
        slides.forEach(slide => slide.classList.add('swiper-slide'));

        // Create navigation buttons
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
                },

                on: {
                    init: function() {
                        console.log(`Swiper initialized for ${sliderId}`);
                    }
                }
            });
        } catch (error) {
            console.error(`Error initializing Swiper for ${sliderId}:`, error);
        }
    }

    createNavigationButtons(sliderElement, sliderId) {
        // Check if navigation buttons already exist
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
