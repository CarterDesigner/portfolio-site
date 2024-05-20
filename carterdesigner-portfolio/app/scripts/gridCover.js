export function gridCoverScript() {
    const wrappers = document.querySelectorAll('.grid-cover .tiles');

    const createTile = index => {
        const tile = document.createElement('div');
        tile.classList.add('tile');
        return tile;
    }

    const createTiles = (wrapper, quantity) => {
        Array.from(Array(quantity)).map((_, index) => {
            wrapper.appendChild(createTile(index));
        });
    }

    const createGrid = wrapper => {
        wrapper.innerHTML = "";
        let columns = Math.floor(document.body.clientWidth / 50);
        let rows = Math.floor(document.body.clientHeight / 50);
        wrapper.style.setProperty('--columns', columns);
        wrapper.style.setProperty('--rows', rows);
        createTiles(wrapper, columns * rows);
    }

    wrappers.forEach(wrapper => {
        createGrid(wrapper);
    });

    window.onresize = () => {
        wrappers.forEach(wrapper => {
            createGrid(wrapper);
        });
    }
}
