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

initFooterMobileMenu();
initHeaderDropdownMenu();


// Універсальний скрипт для всіх інфо іконок
document.addEventListener('DOMContentLoaded', function () {
    const infoWrappers = document.querySelectorAll('.info-wrapper');

    infoWrappers.forEach(wrapper => {
        const icon = wrapper.querySelector('.info-icon');
        const closeBtn = wrapper.querySelector('.close-popup');

        // Відкрити/закрити при кліку на іконку
        icon.addEventListener('click', function (e) {
            e.stopPropagation();

            // Закрити всі інші відкриті вікна
            document.querySelectorAll('.info-wrapper.active').forEach(w => {
                if (w !== wrapper) w.classList.remove('active');
            });

            // Перемкнути поточне вікно
            wrapper.classList.toggle('active');
        });

        // Закрити при кліку на кнопку закриття
        if (closeBtn) {
            closeBtn.addEventListener('click', function (e) {
                e.stopPropagation();
                wrapper.classList.remove('active');
            });
        }
    });

    // Закрити при кліку поза вікном
    document.addEventListener('click', function (e) {
        if (!e.target.closest('.info-wrapper')) {
            document.querySelectorAll('.info-wrapper.active').forEach(w => {
                w.classList.remove('active');
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const navButton = document.querySelector('.catalog__sidebar-nav-show');
    const navContainer = document.querySelector('.catalog__sidebar-nav');

    navButton.addEventListener('click', function () {
        navContainer.classList.toggle('collapsed');

        // Оновлюємо aria-label для доступності
        const isCollapsed = navContainer.classList.contains('collapsed');
        navButton.setAttribute('aria-label', isCollapsed ? 'open navigation' : 'close navigation');
        navButton.setAttribute('title', isCollapsed ? 'open navigation' : 'close navigation');
    });
});

// Універсальна система табів для багатьох блоків
document.addEventListener('DOMContentLoaded', function () {
    // Знаходимо всі групи табів
    const tabGroups = document.querySelectorAll('[data-tabs-group]');

    tabGroups.forEach(group => {
        const tabs = group.querySelectorAll('.catalog__body-tab');
        const contents = group.querySelectorAll('.catalog__tab-content');

        tabs.forEach(tab => {
            tab.addEventListener('click', function () {
                const targetTab = this.getAttribute('data-tab');

                // Деактивуємо всі таби в цій групі
                tabs.forEach(t => {
                    t.classList.remove('catalog__body-tab--active');
                    t.setAttribute('aria-pressed', 'false');
                });

                // Активуємо поточний таб
                this.classList.add('catalog__body-tab--active');
                this.setAttribute('aria-pressed', 'true');

                // Ховаємо весь контент в цій групі
                contents.forEach(content => {
                    content.classList.remove('active');
                });

                // Показуємо відповідний контент
                const targetContent = group.querySelector(`[data-tab-content="${targetTab}"]`);
                if (targetContent) {
                    targetContent.classList.add('active');
                }
            });
        });
    });
});