function toggleMenu(button) {
    button.classList.toggle('active');
}

function handleScroll() {
    const parallaxTitle = document.querySelector('.parallax-title');
    const parallaxSection = document.querySelector('.parallax');
    const scrollY = window.scrollY;

    // Parallax Title Slide Up
    const parallaxHeight = parallaxSection.offsetHeight;
    if (scrollY > parallaxHeight / 3) {
        parallaxTitle.style.opacity = 1;
        parallaxTitle.style.transform = 'translateY(0)';
    } else {
        parallaxTitle.style.opacity = 0;
        parallaxTitle.style.transform = 'translateY(100px)';
    }

    // Change parallax opacity based on scroll
    const opacity = 1 - Math.min(scrollY / parallaxHeight, 1);
    parallaxSection.style.opacity = opacity;
}

window.addEventListener('scroll', handleScroll);
