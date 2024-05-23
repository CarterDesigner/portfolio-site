export function gridCoverScript() {
    const coverWrappers = document.querySelectorAll('.grid-cover .tiles');

const createTile = () => {
    const tile = document.createElement('div');
    tile.classList.add('tile');
    return tile;
};

const createTileRow = (numTiles) => {
    const row = document.createElement('div');
    row.classList.add('tile-row');
    for (let i = 0; i < numTiles; i++) {
        row.appendChild(createTile());
    }
    return row;
};

const createTiles = (wrapper, numRows, numCols) => {
    for (let rowIndex = 0; rowIndex < numRows; rowIndex++) {
        const row = createTileRow(numCols);
        wrapper.appendChild(row);
    }
};

const createGrid = wrapper => {
    wrapper.innerHTML = "";
    let coverColumns = Math.floor(document.body.clientWidth / 50);
    let coverRows = Math.floor(document.body.clientHeight / 50);
    wrapper.style.setProperty('--coverColumns', coverColumns);
    wrapper.style.setProperty('--coverRows', coverRows);
    createTiles(wrapper, coverRows, coverColumns);
};

coverWrappers.forEach(wrapper => {
    createGrid(wrapper);
});

const handleScroll = () => {
    const containers = document.querySelectorAll('.grid-cover-container');
    containers.forEach(container => {
        const contDistanceFromTop = container.getBoundingClientRect().top;
        if (contDistanceFromTop < (window.innerHeight / 2)) {
            coverWrappers.forEach(wrapper => {
                const rows = wrapper.querySelectorAll('.tile-row');
                rows.forEach((row, rowIndex) => {
                    const tiles = row.children;
                    for (let tileIndex = 0; tileIndex < tiles.length; tileIndex++) {
                        setTimeout(() => {
                            tiles[tileIndex].classList.add('gridCoverTileDisappear');
                        }, rowIndex * 100);
                    }
                });
            });
        }
    });
};

window.addEventListener('resize', () => {
    coverWrappers.forEach(wrapper => {
        createGrid(wrapper);
    });
});

window.addEventListener('scroll', handleScroll);

}
