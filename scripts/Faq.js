class Faq {
    constructor() {
        this.initTabsFaq();
        this.initAccordion();
    }

    initTabsFaq() {
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
    }

    initAccordion() {
        const accordionHeaders = document.querySelectorAll('.faq__accordion-header');

        accordionHeaders.forEach(header => {
            header.addEventListener('click', () => {
                const content = header.nextElementSibling;
                const icon = header.querySelector('.faq__accordion-icon');
                const parent = header.closest('.faq__tab-content-button-info');

                // Закриваємо інші акордеони в межах однієї вкладки
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

                // Перемикаємо поточний
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
}

export default Faq;
