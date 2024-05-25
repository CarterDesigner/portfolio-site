export function skillImagesScript() {
    let skillImages = document.querySelectorAll('.skill-image');
    let skillGrid = document.querySelector('.skills-grid');
    skillImages.forEach((image) => {
        let gridDistanceFromTop = skillGrid.getBoundingClientRect().top;
        if (gridDistanceFromTop < (window.innerHeight * 0.7)) {
            image.style.transform = 'scale(1)';
        }
    });
}