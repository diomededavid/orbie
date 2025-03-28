document.addEventListener('DOMContentLoaded', () => {
    const animateNumbers = document.querySelectorAll('.animate-number');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const targetNumber = parseInt(target.getAttribute('data-target'), 10);
                let currentNumber = 0;
                const increment = targetNumber / 100;

                const updateNumber = () => {
                    currentNumber += increment;
                    if (currentNumber < targetNumber) {
                        target.textContent = Math.ceil(currentNumber);
                        requestAnimationFrame(updateNumber);
                    } else {
                        target.textContent = targetNumber;
                    }
                };

                updateNumber();
                observer.unobserve(target);
            }
        });
    }, { threshold: 0.1 });

    animateNumbers.forEach(number => {
        observer.observe(number);
    });
});
