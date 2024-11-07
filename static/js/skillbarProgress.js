document.addEventListener('DOMContentLoaded', function() {
    const skillBars = document.querySelectorAll('.skill-percentage');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, {
        threshold: 0.1
    });

    skillBars.forEach(skillBar => {
        skillBar.style.setProperty('--animation-duration', '3s'); // Change duration here if needed
        skillBar.style.animationPlayState = 'paused';
        observer.observe(skillBar);
    });
});