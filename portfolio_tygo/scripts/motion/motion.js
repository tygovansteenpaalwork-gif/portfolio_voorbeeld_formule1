const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

revealElements.forEach((element) => revealObserver.observe(element));

function revealVisibleElements() {
    revealElements.forEach((element) => {
        if (element.getBoundingClientRect().top < window.innerHeight * 0.9) {
            element.classList.add('is-visible');
        }
    });
}

revealVisibleElements();
window.addEventListener('resize', revealVisibleElements);
window.addEventListener('scroll', revealVisibleElements, { passive: true });
