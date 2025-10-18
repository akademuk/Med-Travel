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
        new this.TransformedSlider('slider-facelift');
        new this.TransformedSlider('slider-abdominoplasty');
        new this.TransformedSlider('slider-breast');
        new this.TransformedSlider('slider-hair');
        new this.TransformedSlider('slider-rhinoplasty');
        new this.TransformedSlider('slider-dental');
    }

    TransformedSlider = class {
        constructor(sliderId) {
            this.slider = document.getElementById(sliderId);
            if (!this.slider) return;
            
            this.wrapper = this.slider.querySelector('.transformed__slider-wrapper');
            this.slides = this.slider.querySelectorAll('.transformed__slider-slide');
            this.prevBtn = this.slider.querySelector('.prev-btn');
            this.nextBtn = this.slider.querySelector('.next-btn');
            
            if (!this.wrapper || !this.slides.length || !this.prevBtn || !this.nextBtn) return;
            
            this.currentIndex = 0;
            this.slidesPerView = this.getSlidesPerView();
            
            // Drag/Swipe variables
            this.isDragging = false;
            this.startPos = 0;
            this.currentTranslate = 0;
            this.prevTranslate = 0;
            this.animationID = 0;
            this.currentX = 0;
            
            this.init();
        }

        getSlidesPerView() {
            if (window.innerWidth <= 768) return 1;
            if (window.innerWidth <= 1024) return 2;
            return 3;
        }

        init() {
            this.updateSlider();
            this.updateButtons();
            
            // Button clicks
            this.prevBtn.addEventListener('click', () => this.prev());
            this.nextBtn.addEventListener('click', () => this.next());
            
            // Drag/Swipe events
            this.wrapper.addEventListener('mousedown', this.touchStart.bind(this));
            this.wrapper.addEventListener('touchstart', this.touchStart.bind(this));
            
            this.wrapper.addEventListener('mousemove', this.touchMove.bind(this));
            this.wrapper.addEventListener('touchmove', this.touchMove.bind(this));
            
            this.wrapper.addEventListener('mouseup', this.touchEnd.bind(this));
            this.wrapper.addEventListener('touchend', this.touchEnd.bind(this));
            
            this.wrapper.addEventListener('mouseleave', this.touchEnd.bind(this));
            
            // Prevent context menu on long press
            this.wrapper.addEventListener('contextmenu', (e) => {
                if (this.isDragging) e.preventDefault();
            });
            
            // Disable image dragging
            this.slides.forEach(slide => {
                const images = slide.querySelectorAll('img');
                images.forEach(img => {
                    img.addEventListener('dragstart', (e) => e.preventDefault());
                });
            });
            
            // Resize handler
            window.addEventListener('resize', () => {
                const oldSlidesPerView = this.slidesPerView;
                this.slidesPerView = this.getSlidesPerView();
                
                if (oldSlidesPerView !== this.slidesPerView) {
                    this.currentIndex = 0;
                    this.updateSlider();
                }
            });
        }

        touchStart(e) {
            this.isDragging = true;
            this.startPos = this.getPositionX(e);
            this.animationID = requestAnimationFrame(this.animation.bind(this));
            this.wrapper.style.cursor = 'grabbing';
        }

        touchMove(e) {
            if (!this.isDragging) return;
            
            const currentPosition = this.getPositionX(e);
            this.currentX = currentPosition - this.startPos;
        }

        touchEnd() {
            if (!this.isDragging) return;
            
            this.isDragging = false;
            cancelAnimationFrame(this.animationID);
            this.wrapper.style.cursor = 'grab';
            
            const movedBy = this.currentX;
            
            // Threshold for swipe (50px)
            if (movedBy < -50 && this.currentIndex < this.slides.length - this.slidesPerView) {
                this.next();
            } else if (movedBy > 50 && this.currentIndex > 0) {
                this.prev();
            } else {
                this.updateSlider();
            }
            
            this.currentX = 0;
        }

        getPositionX(e) {
            return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
        }

        animation() {
            if (this.isDragging) {
                const slideWidth = this.slides[0].offsetWidth;
                const gap = parseInt(window.getComputedStyle(this.wrapper).gap) || 20;
                const baseOffset = -(this.currentIndex * (slideWidth + gap));
                this.wrapper.style.transform = `translateX(${baseOffset + this.currentX}px)`;
                requestAnimationFrame(this.animation.bind(this));
            }
        }

        updateSlider() {
            if (!this.slides.length) return;
            
            const slideWidth = this.slides[0].offsetWidth;
            const gap = parseInt(window.getComputedStyle(this.wrapper).gap) || 20;
            const offset = -(this.currentIndex * (slideWidth + gap));
            this.wrapper.style.transform = `translateX(${offset}px)`;
            this.wrapper.style.transition = 'transform 0.3s ease';
            this.updateButtons();
            
            // Remove transition after animation
            setTimeout(() => {
                if (!this.isDragging) {
                    this.wrapper.style.transition = '';
                }
            }, 300);
        }

        updateButtons() {
            const maxIndex = Math.max(0, this.slides.length - this.slidesPerView);
            if (this.prevBtn) {
                this.prevBtn.disabled = this.currentIndex === 0;
            }
            if (this.nextBtn) {
                this.nextBtn.disabled = this.currentIndex >= maxIndex;
            }
        }

        next() {
            const maxIndex = Math.max(0, this.slides.length - this.slidesPerView);
            if (this.currentIndex < maxIndex) {
                this.currentIndex++;
                this.updateSlider();
            }
        }

        prev() {
            if (this.currentIndex > 0) {
                this.currentIndex--;
                this.updateSlider();
            }
        }
    }
}

export default Transformed;