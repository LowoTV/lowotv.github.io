window.addEventListener('scroll', function() {
    const offset = window.scrollY * 0; // adjust speed
    document.body.style.backgroundPosition = `center calc(0% + ${offset}px)`;
});
