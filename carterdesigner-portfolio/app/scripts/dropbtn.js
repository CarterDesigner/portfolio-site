export function dropbtnScript() {
    const dropbtn = document.querySelector('.hamburger');
    dropbtn.addEventListener('click', () => {
        dropbtn.classList.add('is-active');
    });
}