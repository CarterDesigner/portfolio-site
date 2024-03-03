const wrapper = document.querySelector('.background .tiles');

let columns = Math.floor(document.body.clientWidth / 50);
let rows = Math.floor(document.body.clientHeight / 50);

const createTile = index => {
    const tile = document.createElement('div');
    tile.classList.add('tile');
    return tile;
}

const createTiles = quantity => {
    Array.from(Array(quantity)).map((tile, index) => {
        wrapper.appendChild(createTile(index));
    })
}

createTiles(columns * rows);

const createGrid = () => {
    wrapper.innerHTML = "";
    columns = Math.floor(document.body.clientWidth / 50);
    rows = Math.floor(document.body.clientHeight / 50);

    wrapper.style.setProperty('--columns', columns);
    wrapper.style.setProperty('--rows', rows);

    createTiles(columns * rows);
}
createGrid();

window.onresize = () => createGrid();

const dropBtn = document.querySelector('.hamburger');
const dropMenu = document.querySelector('.drop-down');
const options = document.querySelectorAll('.drop-container .main-options .option');
dropBtn.addEventListener('click', () => {
    dropBtn.classList.toggle('is-active');
    dropMenu.classList.toggle('drop-display');
    if (dropMenu.classList.contains('drop-display')) {
        document.getElementsByTagName('html')[0].style.overflowY = 'hidden';
    } else {
        document.getElementsByTagName('html')[0].style.overflowY = 'scroll';
    }
});
options.forEach((option) => {
    option.addEventListener('click', () => {
        dropMenu.classList.remove('drop-display');
        dropBtn.classList.remove('is-active');
        document.getElementsByTagName('html')[0].style.overflowY = 'scroll';
    })
})


const navigation = document.querySelector('.navigation');
window.addEventListener('scroll', () => {
    let scrollThreshold = window.innerHeight * 0.1;
    let scrollDistance = window.scrollY;
    if (scrollDistance > scrollThreshold) {
        navigation.style.backgroundColor = 'rgb(20, 20, 20)';
        navigation.style.borderBottom = 'solid 2px #00b4d8';
    } else {
        navigation.style.backgroundColor = 'transparent';
        navigation.style.borderBottom = 'none';
    }
});

const portCard1 = document.querySelector('.portfolio-container .project-card')[0];
const portCard2 = document.querySelector('.portfolio-container .project-card')[1];
window.addEventListener('scroll', () => {
    
});

const earth3D = document.querySelector('.wc-container .D-back');
let isSticky = false;
let initialOffsetTop = earth3D.offsetTop;
window.addEventListener('scroll', () => {
    var scrollY = window.scrollY;

    if (!isSticky && scrollY >= (initialOffsetTop - 20)) {
        earth3D.style.position = 'fixed';
        isSticky = true;
    } else if (isSticky && scrollY < (initialOffsetTop - 20)) {
        earth3D.style.position = 'static';
        isSticky = false;
    }
});