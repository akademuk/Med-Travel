
class Counter {
    constructor() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.init());
        } else {
            this.init();
        }
    }

    init() {
        this.setupScrollObserver();
    }

    animateCounter(element, target, duration = 2000) {
        const start = 0;
        const increment = target / (duration / 16); 
        let current = start;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            const span = element.querySelector('span');
            const suffix = span ? span.textContent : '';
            const displayValue = Math.floor(current);
            
            element.childNodes[0].textContent = displayValue;
        }, 16);
    }

    startCounters() {
        const counters = document.querySelectorAll('.trust-us__body--column-number');
        
        counters.forEach(counter => {
            const text = counter.textContent.trim();
            const match = text.match(/^(\d+)/);
            
            if (match) {
                const targetValue = parseInt(match[1]);
                this.animateCounter(counter, targetValue);
            }
        });
    }

    setupScrollObserver() {
        const trustUsSection = document.querySelector('.trust-us');
        
        if (!trustUsSection) return;
        
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.3 
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.startCounters();
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        observer.observe(trustUsSection);
    }
}

export default Counter;