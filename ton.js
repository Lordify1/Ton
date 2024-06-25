// Adding interactive effects on hover for feature, use-case, and funding items
document.querySelectorAll('.feature-item, .use-case-item, .funding-item').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.transform = 'scale(1.05)';
    });
    item.addEventListener('mouseout', () => {
        item.style.transform = 'scale(1)';
    });
});

// Header animation on load
window.addEventListener('load', () => {
    document.querySelector('.header h1').style.transform = 'scale(1.1)';
    setTimeout(() => {
        document.querySelector('.header h1').style.transform = 'scale(1)';
    }, 300);
});