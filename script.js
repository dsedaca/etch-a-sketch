let grid = document.getElementById('container');
const show = document.getElementById('show');

function createGrid(num) {
    for (let i = 0; i < num; i++) {
        divGrid = document.createElement('div');
        divGrid.innerHTML = 'Div ' + (i + 1);
        divGrid.style.backgroundColor = 'red';
        grid.appendChild(divGrid);
    }
    return(true);
}


show.addEventListener('click', () => {
    let numberOfBlocks = document.querySelector('#squares').value;

    if (createGrid(numberOfBlocks) === true) {
        divGrid.remove();
        createGrid(numberOfBlocks);
    } else {
        createGrid(numberOfBlocks);
    }
});