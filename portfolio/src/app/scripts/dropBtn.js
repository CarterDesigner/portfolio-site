export function dropBtnScript() {
    const dropBtn = document.querySelector('.hamburger');
    function hamburgerClicked() {
        dropBtn.classList.toggle('is-active');
    };
    dropBtn.addEventListener('click', hamburgerClicked);
    return () => {
        dropBtn.removeEventListener('click', hamburgerClicked);
    }
}