const customCursor = document.querySelector('.custom-cursor');
const interactiveElements = document.querySelectorAll('a, button, input, textarea');

window.addEventListener('mousemove', (event) => {
    customCursor.style.left = `${event.clientX}px`;
    customCursor.style.top = `${event.clientY}px`;
});

window.addEventListener('mousedown', () => {
    customCursor.classList.add('is-clicking');
});

window.addEventListener('mouseup', () => {
    customCursor.classList.remove('is-clicking');
});

interactiveElements.forEach((element) => {
    element.addEventListener('mouseenter', () => {
        customCursor.classList.add('is-hovering');
    });

    element.addEventListener('mouseleave', () => {
        customCursor.classList.remove('is-hovering');
    });
});

const revealImages = document.querySelectorAll('.image-reveal');

revealImages.forEach((container) => {
    const reveal = container.querySelector('.reveal-image');

    container.addEventListener('mousemove', (event) => {
        const rect = container.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        reveal.style.clipPath =
            `circle(110px at ${x}px ${y}px)`;
    });

    container.addEventListener('mouseleave', () => {
        reveal.style.clipPath = 'circle(0px at 50% 50%)';
    });
});