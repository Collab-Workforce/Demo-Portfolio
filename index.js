// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').slice(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

// Redirect on "Start With CW" button click
document.querySelector('.btn').addEventListener('click', () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});

// JavaScript to add target="_blank" to all links
document.querySelectorAll('a').forEach(function (link) {
    link.setAttribute('target', '_blank');
});
