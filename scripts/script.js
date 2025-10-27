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
    document.addEventListener('DOMContentLoaded', function () {
        const navItems = document.querySelectorAll('.footer__nav-item');

        navItems.forEach(item => {
            const mainLink = item.querySelector('.footer__nav-link');
            const submenu = item.querySelector('.footer__submenu');

            if (mainLink && submenu) {
                mainLink.addEventListener('click', function (e) {
                    if (window.innerWidth <= 768) {
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
            if (window.innerWidth <= 768) {
                if (!e.target.closest('.footer__nav-item')) {
                    navItems.forEach(item => {
                        item.classList.remove('is-active');
                    });
                }
            }
        });
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
});
