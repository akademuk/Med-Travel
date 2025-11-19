// blog.js
function initBlog() {
    if (typeof Swiper === 'undefined') return;

    const sliderElement = document.querySelector('.blog__slider');
    if (!sliderElement) return;

    const wrapper = sliderElement.querySelector('.blog__wrapper');
    const slides = sliderElement.querySelectorAll('.blog__slide');

    if (!wrapper || !slides.length) return;

    sliderElement.classList.add('swiper');
    wrapper.classList.add('swiper-wrapper');
    slides.forEach(slide => slide.classList.add('swiper-slide'));

    try {
        new Swiper(sliderElement, {
            slidesPerView: "auto",
            spaceBetween: 24,
            grabCursor: true,
            navigation: {
                nextEl: '.blog__navigation-btn.next-btn',
                prevEl: '.blog__navigation-btn.prev-btn',
            },
            breakpoints: {
                576: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 24
                }
            }
        });
    } catch (error) { }
}

// blog.js
function initBlog2() {
    if (typeof Swiper === 'undefined') return;

    const sliderElement = document.querySelector('.blog__slider2');
    if (!sliderElement) return;

    const wrapper = sliderElement.querySelector('.blog__wrapper2');
    const slides = sliderElement.querySelectorAll('.blog__slide2');

    if (!wrapper || !slides.length) return;

    sliderElement.classList.add('swiper');
    wrapper.classList.add('swiper-wrapper');
    slides.forEach(slide => slide.classList.add('swiper-slide'));

    try {
        new Swiper(sliderElement, {
            slidesPerView: "auto",
            spaceBetween: 24,
            grabCursor: true,
            navigation: {
                nextEl: '.blog__navigation-btn.next-btn',
                prevEl: '.blog__navigation-btn.prev-btn',
            },
            breakpoints: {
                576: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 24
                }
            }
        });
    } catch (error) { }
}

// counter.js
function initCounter() {
    const trustUsSection = document.querySelector('.trust-us');
    if (!trustUsSection) return;

    function animateCounter(element, target, duration = 2000) {
        const increment = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            const span = element.querySelector('span');
            const displayValue = Math.floor(current);
            element.childNodes[0].textContent = displayValue;
        }, 16);
    }

    function startCounters() {
        const counters = document.querySelectorAll('.trust-us__body--column-number');

        counters.forEach(counter => {
            const text = counter.textContent.trim();
            const match = text.match(/^(\d+)/);

            if (match) {
                const targetValue = parseInt(match[1]);
                animateCounter(counter, targetValue);
            }
        });
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounters();
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    });

    observer.observe(trustUsSection);
}

// faq.js
function initFaq() {
    const tabButtons = document.querySelectorAll('.faq__tab-button');
    const tabContents = document.querySelectorAll('.faq__tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabName = button.dataset.tab;

            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            button.classList.add('active');
            document.querySelector(`[data-content="${tabName}"]`).classList.add('active');
        });
    });

    const accordionHeaders = document.querySelectorAll('.faq__accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const icon = header.querySelector('.faq__accordion-icon');
            const parent = header.closest('.faq__tab-content-button-info');

            const allContents = parent.parentElement.querySelectorAll('.faq__accordion-content');
            const allIcons = parent.parentElement.querySelectorAll('.faq__accordion-icon');

            allContents.forEach(c => {
                if (c !== content) {
                    c.style.maxHeight = null;
                    c.classList.remove('active');
                }
            });

            allIcons.forEach(i => {
                if (i !== icon) {
                    i.classList.remove('active');
                }
            });

            if (content.classList.contains('active')) {
                content.classList.remove('active');
                icon.classList.remove('active');
                content.style.maxHeight = null;
            } else {
                content.classList.add('active');
                icon.classList.add('active');
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });
}

// header.js
function initHeader() {
    const rootElement = document.querySelector("[data-js-header]");
    const overlayElement = document.querySelector("[data-js-header-overlay]");
    const burgerButtonElement = document.querySelector("[data-js-header-burger-button]");
    const subMenuElements = document.querySelectorAll("[data-js-header-submenu]");
    const linkSubMenuElements = document.querySelectorAll("[data-js-header-submenu-link]");

    if (!burgerButtonElement || !overlayElement) return;

    burgerButtonElement.addEventListener("click", () => {
        burgerButtonElement.classList.toggle("is-active");
        overlayElement.classList.toggle("is-active");
        document.body.classList.toggle("is-lock");
    });

    linkSubMenuElements.forEach((link, index) => {
        link.addEventListener("click", (event) => {
            if (subMenuElements[index]) {
                subMenuElements[index].classList.toggle("is-active");
            }
        });
    });
}

// leadingDoctors.js
function initLeadingDoctors() {
    if (typeof Swiper === 'undefined') return;

    const sliderElement = document.querySelector('.leading-doctors__slider');
    if (!sliderElement) return;

    const wrapper = sliderElement.querySelector('.leading-doctors__wrapper');
    const slides = sliderElement.querySelectorAll('.leading-doctors__slide');

    if (!wrapper || !slides.length) return;

    sliderElement.classList.add('swiper');
    wrapper.classList.add('swiper-wrapper');
    slides.forEach(slide => slide.classList.add('swiper-slide'));

    try {
        new Swiper(sliderElement, {
            slidesPerView: "auto",
            spaceBetween: 24,
            grabCursor: true,
            navigation: {
                nextEl: '.leading-doctors__navigation-btn.next-btn',
                prevEl: '.leading-doctors__navigation-btn.prev-btn',
            },
            breakpoints: {
                650: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 24
                }
            }
        });
    } catch (error) { }
}

// reviews.js
function initReviews() {
    if (typeof Swiper === 'undefined') return;

    const reviewsSliderElement = document.querySelector('.reviews__slider');
    if (!reviewsSliderElement) return;

    const wrapper = reviewsSliderElement.querySelector('.reviews__wrapper');
    const slides = reviewsSliderElement.querySelectorAll('.reviews__body-slide');

    if (!wrapper || !slides.length) return;

    reviewsSliderElement.classList.add('swiper');
    wrapper.classList.add('swiper-wrapper');
    slides.forEach(slide => slide.classList.add('swiper-slide'));

    try {
        new Swiper(reviewsSliderElement, {
            slidesPerView: "auto",
            spaceBetween: 24,
            grabCursor: true,
            navigation: {
                nextEl: '.reviews__slider .swiper-button-next',
                prevEl: '.reviews__slider .swiper-button-prev',
            },
            // breakpoints: {
            //     650: {
            //         slidesPerView: 2,
            //         spaceBetween: 20
            //     },
            //     1024: {
            //         slidesPerView: 3,
            //         spaceBetween: 24
            //     }
            // }
        });
    } catch (error) { }
}

// results.js
function initResults() {
    if (typeof Swiper === 'undefined') return;

    const resultsSliderElement = document.querySelector('.results__slider');
    if (!resultsSliderElement) return;

    const wrapper = resultsSliderElement.querySelector('.results__wrapper');
    const slides = resultsSliderElement.querySelectorAll('.results__slide');

    if (!wrapper || !slides.length) return;

    resultsSliderElement.classList.add('swiper');
    wrapper.classList.add('swiper-wrapper');
    slides.forEach(slide => slide.classList.add('swiper-slide'));

    try {
        new Swiper(resultsSliderElement, {
            slidesPerView: "auto",
            spaceBetween: 24,
            grabCursor: true,
            navigation: {
                nextEl: '.results__slider .swiper-button-next',
                prevEl: '.results__slider .swiper-button-prev',
            },
            // breakpoints: {
            //     650: {
            //         slidesPerView: 2,
            //         spaceBetween: 20
            //     },
            //     1024: {
            //         slidesPerView: 3,
            //         spaceBetween: 24
            //     }
            // }
        });
    } catch (error) { }
}

// reviews.js
function initCatalog() {
    if (typeof Swiper === 'undefined') return;

    const catalogSliderElement = document.querySelector('.catalog__content-section-slider');
    if (!catalogSliderElement) return;

    const wrapper = catalogSliderElement.querySelector('.catalog__content-section-slider-wrapper');
    const slides = catalogSliderElement.querySelectorAll('.catalog__content-section-slide');

    if (!wrapper || !slides.length) return;

    catalogSliderElement.classList.add('swiper');
    wrapper.classList.add('swiper-wrapper');
    slides.forEach(slide => slide.classList.add('swiper-slide'));

    try {
        new Swiper(catalogSliderElement, {
            slidesPerView: 1,
            spaceBetween: 0,
            grabCursor: true,
            navigation: {
                nextEl: '.catalog__content-section-btn.swiper-button-next',
                prevEl: '.catalog__content-section-btn.swiper-button-prev',
            },

            breakpoints: {
                768: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                }
            }
        });
    } catch (error) { }
}

// transformed.js
function initTransformed() {
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

    if (typeof Swiper === 'undefined') return;

    const sliderIds = [
        'slider-facelift',
        'slider-abdominoplasty',
        'slider-breast',
        'slider-hair',
        'slider-rhinoplasty',
        'slider-dental'
    ];

    sliderIds.forEach(sliderId => {
        const sliderElement = document.getElementById(sliderId);
        if (!sliderElement) return;

        const wrapper = sliderElement.querySelector('.transformed__slider-wrapper');
        const slides = sliderElement.querySelectorAll('.transformed__slider-slide');

        if (!wrapper || !slides.length) return;

        sliderElement.classList.add('swiper');
        wrapper.classList.add('swiper-wrapper');
        slides.forEach(slide => slide.classList.add('swiper-slide'));

        try {
            new Swiper(sliderElement, {
                slidesPerView: "auto",
                spaceBetween: 24,
                loop: false,
                grabCursor: true,
                navigation: {
                    nextEl: `#${sliderId} .transformed__slider-btn.next-btn`,
                    prevEl: `#${sliderId} .transformed__slider-btn.prev-btn`,
                }
            });
        } catch (error) { }
    });
}

function initFooterMobileMenu() {
    const navItems = document.querySelectorAll('.footer__nav-item');

    if (navItems.length === 0) {
        return;
    }

    navItems.forEach(item => {
        const mainLink = item.querySelector('.footer__nav-link');
        const submenu = item.querySelector('.footer__submenu');

        if (mainLink && submenu) {
            mainLink.addEventListener('click', function (e) {
                if (window.innerWidth <= 1280) {
                    e.preventDefault();

                    navItems.forEach(otherItem => {
                        if (otherItem !== item) {
                            otherItem.classList.remove('is-active');
                        }
                    });

                    item.classList.toggle('is-active');
                }
            });
        }
    });

    document.addEventListener('click', function (e) {
        if (window.innerWidth <= 1280) {
            if (!e.target.closest('.footer__nav-item')) {
                navItems.forEach(item => {
                    item.classList.remove('is-active');
                });
            }
        }
    });
}

function initHeaderDropdownMenu() {
    const OPEN_CLASS = 'is-open';

    function toggleSubmenu(item, submenu) {
        const isOpen = item.classList.contains(OPEN_CLASS);

        if (!isOpen && item.parentElement) {
            Array.from(item.parentElement.children).forEach(sibling => {
                if (sibling !== item) {
                    sibling.classList.remove(OPEN_CLASS);
                    sibling.querySelectorAll('.' + OPEN_CLASS).forEach(el =>
                        el.classList.remove(OPEN_CLASS)
                    );
                }
            });
        }

        item.classList.toggle(OPEN_CLASS);
        submenu.classList.toggle(OPEN_CLASS);

        if (isOpen) {
            submenu.querySelectorAll('.' + OPEN_CLASS).forEach(el =>
                el.classList.remove(OPEN_CLASS)
            );
        }
    }

    function setupMenuItem(item, submenu, link) {
        const isSpan = link.tagName.toLowerCase() === 'span';
        const href = link.getAttribute('href');

        if (isSpan || !href || href === '#' || href === '') {
            link.addEventListener('click', e => {
                e.preventDefault();
                e.stopPropagation();
                toggleSubmenu(item, submenu);
            });
        }
    }

    function init() {
        document.querySelectorAll('.header__menu-position-item').forEach(item => {
            const link = item.querySelector('.header__menu-position-link');
            const submenu = item.querySelector('.header__menu');

            if (link && submenu) {
                setupMenuItem(item, submenu, link);
            }
        });

        document.querySelectorAll('.header__menu-item.h0').forEach(item => {
            const link = item.querySelector('.header__menu-link');
            const submenu = item.querySelector('.header__submenu');

            if (link && submenu) {
                setupMenuItem(item, submenu, link);
            }
        });

        document.querySelectorAll('.header__promo-nav-item').forEach(item => {
            const link = item.querySelector('span[data-js-header-submenu-link]');
            const submenu = item.querySelector('[data-js-header-submenu]');

            if (link && submenu) {
                setupMenuItem(item, submenu, link);
            }
        });

        document.addEventListener('click', e => {
            if (!e.target.closest('.header__menu-position, .header__promo-nav-list')) {
                document.querySelectorAll('.' + OPEN_CLASS).forEach(el =>
                    el.classList.remove(OPEN_CLASS)
                );
            }
        });

        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                document.querySelectorAll('.' + OPEN_CLASS).forEach(el =>
                    el.classList.remove(OPEN_CLASS)
                );
            }, 250);
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
}

// info.js
function initInfo() {
    const infoWrappers = document.querySelectorAll('.info-wrapper');

    infoWrappers.forEach(wrapper => {
        const icon = wrapper.querySelector('.info-icon');
        const closeBtn = wrapper.querySelector('.close-popup');

        icon.addEventListener('click', function (e) {
            e.stopPropagation();

            document.querySelectorAll('.info-wrapper.active').forEach(w => {
                if (w !== wrapper) w.classList.remove('active');
            });

            wrapper.classList.toggle('active');
        });

        if (closeBtn) {
            closeBtn.addEventListener('click', function (e) {
                e.stopPropagation();
                wrapper.classList.remove('active');
            });
        }
    });

    document.addEventListener('click', function (e) {
        if (!e.target.closest('.info-wrapper')) {
            document.querySelectorAll('.info-wrapper.active').forEach(w => {
                w.classList.remove('active');
            });
        }
    });
}

// catalogNav.js
function initCatalogNav() {
    const navButton = document.querySelector('.catalog__sidebar-nav-show');
    const navContainer = document.querySelector('.catalog__sidebar-nav');

    if (!navButton || !navContainer) return;

    navButton.addEventListener('click', function () {
        navContainer.classList.toggle('collapsed');

        const isCollapsed = navContainer.classList.contains('collapsed');
        navButton.setAttribute('aria-label', isCollapsed ? 'open navigation' : 'close navigation');
        navButton.setAttribute('title', isCollapsed ? 'open navigation' : 'close navigation');
    });
}

// tabs.js
function initTabs() {
    const tabGroups = document.querySelectorAll('[data-tabs-group]');

    tabGroups.forEach(group => {
        const tabs = group.querySelectorAll('.catalog__body-tab');
        const contents = group.querySelectorAll('.catalog__tab-content');

        tabs.forEach(tab => {
            tab.addEventListener('click', function () {
                const targetTab = this.getAttribute('data-tab');

                tabs.forEach(t => {
                    t.classList.remove('catalog__body-tab--active');
                    t.setAttribute('aria-pressed', 'false');
                });

                this.classList.add('catalog__body-tab--active');
                this.setAttribute('aria-pressed', 'true');

                contents.forEach(content => {
                    content.classList.remove('active');
                });

                const targetContent = group.querySelector(`[data-tab-content="${targetTab}"]`);
                if (targetContent) {
                    targetContent.classList.add('active');
                }
            });
        });
    });
}


// Gallery initialization with Swiper and Fancybox
function initGallery() {
    const thumbsElement = document.getElementById('galleryThumbs');
    const mainElement = document.getElementById('galleryMain');

    // Если элементов галереи нет на странице, просто выходим из функции
    if (!thumbsElement || !mainElement) {
        return;
    }

    var thumbsSwiper = new Swiper('#galleryThumbs', {
        spaceBetween: 12,
        slidesPerView: 'auto',
        freeMode: true,
        watchSlidesProgress: true,
        allowTouchMove: true,
        grabCursor: true,
        slideToClickedSlide: true,
        centeredSlides: false,
        resistance: true,
        resistanceRatio: 0.85,

        breakpoints: {
            1280: {
                spaceBetween: 24,
            },
        }
    });

    var mainSwiper = new Swiper('#galleryMain', {
        spaceBetween: 0,
        slidesPerView: 1,
        loop: false,
        effect: 'slide',
        allowTouchMove: true,
        grabCursor: true,
        keyboard: {
            enabled: true,
        },
        thumbs: {
            swiper: thumbsSwiper,
        },
        on: {
            slideChange: function () {
                if (thumbsSwiper) {
                    thumbsSwiper.update();
                }
            }
        }
    });

    thumbsSwiper.slides.forEach(function (slide, index) {
        slide.addEventListener('click', function () {
            mainSwiper.slideTo(index);
        });
    });

    Fancybox.bind('[data-fancybox="gallery"]', {
        Toolbar: {
            display: {
                left: [],
                middle: ['infobar'],
                right: ['slideshow', 'fullscreen', 'close'],
            },
        },
        Images: {
            zoom: true,
        },
        Video: {
            tpl: '<video class="fancybox__html5video" playsinline controls controlsList="nodownload" poster="{{poster}}">' +
                '<source src="{{src}}" type="{{format}}" />' +
                'Sorry, your browser doesn\'t support embedded videos.</video>',
            format: "mp4",
            autoplay: true,
        },
        Youtube: {
            controls: 1,
            showinfo: 0,
            rel: 0,
        },
        Vimeo: {
            color: "00adef",
        },
        Thumbs: {
            autoStart: true,
        },
        animated: true,
        showClass: "f-fadeIn",
        hideClass: "f-fadeOut",
    });
}

// Check if Fancybox is loaded before initializing
if (typeof Fancybox !== 'undefined') {
    Fancybox.bind('[data-fancybox="gallerys"]', {
        Toolbar: {
            display: {
                left: [],
                middle: ['infobar'],
                right: ['slideshow', 'fullscreen', 'close'],
            },
        },
        Images: {
            zoom: true,
        },
        Video: {
            tpl: '<video class="fancybox__html5video" playsinline controls controlsList="nodownload" poster="{{poster}}">' +
                '<source src="{{src}}" type="{{format}}" />' +
                'Sorry, your browser doesn\'t support embedded videos.</video>',
            format: "mp4",
            autoplay: true,
        },
        Youtube: {
            controls: 1,
            showinfo: 0,
            rel: 0,
        },
        Vimeo: {
            color: "00adef",
        },
        Thumbs: {
            autoStart: true,
        },
        animated: true,
        showClass: "f-fadeIn",
        hideClass: "f-fadeOut",
    });
}

// Video player control initialization
function initVideoPlayer() {
    const playButton = document.querySelector('.video-player__play-button');
    const video = document.querySelector('.video-player__video');
    const videoPlayer = document.querySelector('.video-player');

    if (!playButton || !video || !videoPlayer) return;

    playButton.addEventListener('click', function () {
        if (video.paused) {
            video.play();
            playButton.style.display = 'none';
            videoPlayer.classList.add('playing');
            video.setAttribute('controls', 'true');
        }
    });

    video.addEventListener('pause', function () {
        playButton.style.display = 'flex';
        videoPlayer.classList.remove('playing');
    });

    video.addEventListener('ended', function () {
        playButton.style.display = 'flex';
        videoPlayer.classList.remove('playing');
    });
}

// Procedures cards with "Load More" functionality
function initProceduresCards() {
    const VISIBLE_ITEMS = 5;

    document.querySelectorAll('.procedures-card').forEach(card => {
        const allItems = card.querySelectorAll('.procedures-card__item');
        const toggleBtn = card.querySelector('.procedures-card__toggle');

        if (allItems.length > VISIBLE_ITEMS) {
            allItems.forEach((item, index) => {
                if (index >= VISIBLE_ITEMS) {
                    item.style.display = 'none';
                }
            });
        } else {
            if (toggleBtn) {
                toggleBtn.style.display = 'none';
            }
        }
    });

    document.querySelectorAll('.procedures-card__toggle').forEach(button => {
        button.addEventListener('click', function () {
            const card = this.closest('.procedures-card');
            const allItems = card.querySelectorAll('.procedures-card__item');

            allItems.forEach(item => {
                item.style.display = '';
            });

            this.style.display = 'none';
        });
    });
}

// Price tabs switching functionality
function initPriceTabs() {
    const tabButtons = document.querySelectorAll('.price-tabs__button');
    const tabPanels = document.querySelectorAll('.price-tabs__panel');

    tabButtons.forEach(button => {
        button.addEventListener('click', function () {
            const targetTab = this.getAttribute('data-tab');
            const targetPanel = document.getElementById(`tab-${targetTab}`);

            // Remove active state from all buttons
            tabButtons.forEach(btn => {
                btn.classList.remove('price-tabs__button--active');
                btn.setAttribute('aria-selected', 'false');
            });

            // Hide all panels
            tabPanels.forEach(panel => {
                panel.classList.remove('price-tabs__panel--active');
                panel.setAttribute('hidden', '');
            });

            // Activate clicked button
            this.classList.add('price-tabs__button--active');
            this.setAttribute('aria-selected', 'true');

            // Show target panel
            if (targetPanel) {
                targetPanel.classList.add('price-tabs__panel--active');
                targetPanel.removeAttribute('hidden');
            }
        });
    });
}

// Doctors cards "Load More" functionality
function initDoctorsLoadMore() {
    const cards = document.querySelectorAll('.doctors-quironsalud__card');
    const loadMoreBtn = document.querySelector('.doctors-quironsalud-lead');

    if (!cards.length || !loadMoreBtn) return;

    let visibleCount = getInitialVisibleCount();

    // Hide cards beyond initial visible count
    function updateCardsVisibility() {
        cards.forEach((card, index) => {
            if (index < visibleCount) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });

        // Hide button if all cards are visible
        if (visibleCount >= cards.length) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = '';
        }
    }

    // Get initial visible count based on screen size
    function getInitialVisibleCount() {
        return window.innerWidth <= 768 ? 4 : 9;
    }

    // Load more cards on button click
    loadMoreBtn.addEventListener('click', function () {
        visibleCount = cards.length;
        updateCardsVisibility();
    });

    // Handle window resize
    let resizeTimer;
    window.addEventListener('resize', function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {
            const newInitialCount = getInitialVisibleCount();
            // Only reset if user hasn't clicked "load more" yet
            if (visibleCount === 4 || visibleCount === 9) {
                visibleCount = newInitialCount;
                updateCardsVisibility();
            }
        }, 250);
    });

    // Initial setup
    updateCardsVisibility();
}

// Nested Tabs System
document.addEventListener('DOMContentLoaded', function () {

    // Основні таби (країни)
    const mainTabs = document.querySelectorAll('.package-available__tab');
    const mainContents = document.querySelectorAll('.package-available__content');

    mainTabs.forEach(tab => {
        tab.addEventListener('click', function () {
            const tabName = this.getAttribute('data-tab');

            // Видалити активний клас з усіх основних табів
            mainTabs.forEach(t => t.classList.remove('active'));
            mainContents.forEach(c => c.classList.remove('active'));

            // Додати активний клас до вибраного табу
            this.classList.add('active');

            // Показати відповідний контент
            const activeContent = document.querySelector(`.package-available__content[data-tab-content="${tabName}"]`);
            if (activeContent) {
                activeContent.classList.add('active');
            }
        });
    });

    // Внутрішні таби (Accommodation, Aftercare, etc.)
    const innerTabButtons = document.querySelectorAll('.package-available__content-button');

    innerTabButtons.forEach(button => {
        button.addEventListener('click', function () {
            const tabName = this.getAttribute('data-tab');
            const parentContent = this.closest('.package-available__content');
            const contentBody = parentContent.querySelector('.package-available__content-body');

            // Видалити активний клас з усіх кнопок в поточному контенті
            const buttonsInParent = parentContent.querySelectorAll('.package-available__content-button');
            buttonsInParent.forEach(btn => btn.classList.remove('active'));

            // Видалити активний клас з усіх внутрішніх контентів в поточному контенті
            const contentsInParent = contentBody.querySelectorAll('.package-available__content-box');
            contentsInParent.forEach(content => content.classList.remove('active'));

            // Додати активний клас до вибраної кнопки
            this.classList.add('active');

            // Показати відповідний внутрішній контент
            const activeInnerContent = contentBody.querySelector(`.package-available__content-box[data-tab-content="${tabName}"]`);
            if (activeInnerContent) {
                activeInnerContent.classList.add('active');
            }
        });
    });

    // Ініціалізація: активувати перший таб
    if (mainTabs.length > 0) {
        mainTabs[0].classList.add('active');
    }
});

// Функція для обгортання першої літери в span
function wrapFirstLetter() {
    // Знаходимо всі заголовки h2 в .decorative-heading
    const headings = document.querySelectorAll('.decorative-heading h2');

    headings.forEach(heading => {
        // Перевіряємо чи вже оброблений (щоб не було циклу)
        if (heading.querySelector('.decorative-letter')) {
            return; // Вже оброблено, пропускаємо
        }

        // Отримуємо текст заголовка
        const text = heading.textContent.trim();

        // Перевіряємо чи є текст
        if (!text || text.length === 0) return;

        // Перша літера
        const firstLetter = text.charAt(0);
        // Решта тексту
        const restText = text.slice(1);

        // Створюємо нову структуру
        heading.innerHTML = `<span class="decorative-letter">${firstLetter}</span>${restText}`;
    });
}

function initCountryTabs() {
    const tabs = document.querySelectorAll('.contact-us__tab');
    const contents = document.querySelectorAll('.contact-us__tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const country = tab.dataset.country;

            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));

            tab.classList.add('active');
            document.querySelector(`.contact-us__tab-content[data-country="${country}"]`).classList.add('active');
        });
    });
}

function initCounters() {
    const counterItems = document.querySelectorAll('.about-us__counter-value');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                entry.target.classList.add('animated');
                
                const targetValue = parseInt(entry.target.textContent.replace(/\s/g, ''));
                const duration = 2000;
                const increment = targetValue / (duration / 16);
                let current = 0;
                
                entry.target.textContent = '0';
                
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= targetValue) {
                        entry.target.textContent = targetValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
                        clearInterval(timer);
                    } else {
                        entry.target.textContent = Math.floor(current).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
                    }
                }, 16);
                
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    counterItems.forEach(item => observer.observe(item));
}

function initEventsGallery() {
    Fancybox.bind("[data-fancybox='events-gallery']", {
        Toolbar: {
            display: {
                left: [],
                middle: [],
                right: ["close"],
            },
        },
        Thumbs: {
            type: "classic",
        },
        Image: {
            zoom: true,
        },
    });
}

function initReviewForm() {
    const form = document.getElementById('reviewForm');
    const clearRatingBtn = document.querySelector('.review-form__clear-rating');
    const starInputs = document.querySelectorAll('.review-form__star-input');
    
    // Очистка рейтингу
    if (clearRatingBtn) {
        clearRatingBtn.addEventListener('click', () => {
            starInputs.forEach(input => input.checked = false);
        });
    }
    
    // Відправка форми
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = new FormData(form);
            
            try {
                const response = await fetch(form.action || '/submit-review', {
                    method: 'POST',
                    body: formData
                });
                
                if (response.ok) {
                    alert('Thank you for your review!');
                    form.reset();
                } else {
                    alert('Something went wrong. Please try again.');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('Something went wrong. Please try again.');
            }
        });
    }
}

function initFileUpload() {
    const fileInputs = document.querySelectorAll('.review-form__file-input');
    
    fileInputs.forEach(input => {
        input.addEventListener('change', function(e) {
            const fileName = this.files[0]?.name;
            const uploadWrapper = this.closest('.review-form__upload');
            const fileNameDisplay = uploadWrapper.querySelector('.review-form__file-name');
            
            if (fileName) {
                fileNameDisplay.textContent = fileName;
                uploadWrapper.classList.add('review-form__upload--has-file');
            } else {
                fileNameDisplay.textContent = '';
                uploadWrapper.classList.remove('review-form__upload--has-file');
            }
        });
    });
}

// Запускаємо після завантаження DOM
document.addEventListener('DOMContentLoaded', wrapFirstLetter);

// Для WordPress - запускаємо після повного завантаження
window.addEventListener('load', wrapFirstLetter);

// Ticker animation fix
function initTicker() {
    const tickers = document.querySelectorAll('.ticker');
    
    tickers.forEach(ticker => {
        const wrapper = ticker.querySelector('.ticker-wrapper');
        if (!wrapper) return;
        
        const firstContent = wrapper.querySelector('.ticker-content');
        if (!firstContent) return;
        
        // Удаляем все существующие ticker-content кроме первого
        const allContents = wrapper.querySelectorAll('.ticker-content');
        allContents.forEach((content, index) => {
            if (index > 0) content.remove();
        });
        
        // Клонируем первый блок 3 раза для бесшовности
        for (let i = 0; i < 3; i++) {
            const clone = firstContent.cloneNode(true);
            clone.removeAttribute('aria-hidden');
            if (i > 0) clone.setAttribute('aria-hidden', 'true');
            wrapper.appendChild(clone);
        }
        
        // Теперь пересчитываем анимацию
        const contentWidth = firstContent.offsetWidth;
        const gap = 27;
        
        // Устанавливаем gap между всеми блоками
        const allNewContents = wrapper.querySelectorAll('.ticker-content');
        allNewContents.forEach((content, index) => {
            if (index < allNewContents.length - 1) {
                content.style.marginRight = gap + 'px';
            }
        });
        
        // Рассчитываем длительность анимации на основе ширины
        const totalWidth = contentWidth + gap;
        const duration = totalWidth / 50; // 50px в секунду
        
        wrapper.style.animation = `scroll ${duration}s linear infinite`;
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.procedures-section-tab');
    const headerOffset = 100;
            
    tabs.forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.preventDefault();
            
            tabs.forEach(t => t.classList.remove('procedures-section-tab--active'));
            this.classList.add('procedures-section-tab--active');
            
            const targetId = this.getAttribute('href');
            if (targetId && targetId.startsWith('#')) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});

// main.js - вызов всех функций
document.addEventListener('DOMContentLoaded', () => {
    initHeader();
    initBlog();
    initCounter();
    initFaq();
    initLeadingDoctors();
    initReviews();
    initTransformed();
    initFooterMobileMenu();
    initHeaderDropdownMenu();
    initInfo();
    initCatalogNav();
    initTabs();
    initGallery();
    initVideoPlayer();
    initProceduresCards();
    initPriceTabs();
    initDoctorsLoadMore();
    initCatalog();
    initResults();
    initBlog2();
    initCountryTabs();
    initCounters();
    initEventsGallery();
    initReviewForm();
    initFileUpload();
    initTicker();
});
