document.addEventListener('DOMContentLoaded', () => {
    const marquee = document.querySelector('.marquee');
    const text = marquee.querySelector('span');

    function startMarquee() {
    const wrapperWidth = marquee.parentElement.offsetWidth;
    const textWidth = text.offsetWidth;

    const speed = 100; // pixels per second
    const duration = (textWidth + wrapperWidth) / speed;

    marquee.style.animation = `scroll ${duration}s linear infinite`;
    marquee.style.left = wrapperWidth + 'px';

    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes scroll {
        from { transform: translateX(0); }
        to { transform: translateX(-${textWidth + wrapperWidth}px); }
        }
    `;
    document.head.appendChild(style);
    }

    window.addEventListener('load', startMarquee);
    window.addEventListener('resize', () => {
    // Recalculate on resize for responsiveness
    marquee.style.animation = 'none'; // Reset animation
    void marquee.offsetWidth; // Trigger reflow
    startMarquee();
    });
})