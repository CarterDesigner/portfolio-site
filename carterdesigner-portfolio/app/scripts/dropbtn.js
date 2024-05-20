export function dropbtnScript() {
    const dropbtn = document.querySelector('.hamburger');
    dropbtn.addEventListener('click', () => {
    if (dropbtn.classList.contains('is-active')) {
        dropbtn.classList.remove('is-active');
    } else {
        dropbtn.classList.add('is-active');
    }
    });
}