let grid = document.getElementById('container');
const show = document.getElementById('show');
const black = document.getElementById('black');
const rainbow = document.getElementById('rainbow');
const eraser = document.getElementById('eraser');
const clear = document.getElementById('clear');
let containerHeight = 500;
let containerWidth = 500;
let divGrid;
let divRow;
let divRemove;
let oldBlocks = 0;

function createGrid(num) {
    let figureDivHeight = parseInt(containerHeight) / parseInt(num);
    let figureDivWidth = parseInt(containerWidth) / parseInt(num);;
    let newDivHeight;
    let newDivWidth;
    
    for (var i = 0; i < num; i++) {
        divGrid = document.createElement('div');
        divGrid.className = 'grid';
        for (var j = 0; j < num; j++) {
            divRow = document.createElement('div');
            divRow.className = 'row';
            divRow.style.backgroundColor = 'red';
            newDivHeight = figureDivHeight + 'px';
            newDivWidth = figureDivWidth + 'px';
            divRow.style.height = newDivHeight;
            divRow.style.width = newDivWidth;
            divGrid.appendChild(divRow);
        }
        grid.appendChild(divGrid);
    }

    oldBlocks = num;
}

function removeGrid (num) {
    divRemove = document.getElementById('container').lastChild

    for (let i = num; i > 0; i--) {
        divRemove.remove();
        divRemove = document.getElementById('container').lastChild
    }
}

function clearGrid (num) {
    let totalGrid = document.getElementsByClassName('row');
    for (let i = 0; i < totalGrid.length; i++) {
        totalGrid[i].style.backgroundColor = 'white';
    }

}

function eraseGrid () {

}

show.addEventListener('click', () => {
    let numberOfBlocks = document.querySelector('#squares').value;
    let newBlocks = parseInt(numberOfBlocks);

    if (newBlocks < 0 || newBlocks > 64) {
        alert('Please choose a number between 0 and 64!')
        document.querySelector('#squares').value = 0;
    } else {
        removeGrid(oldBlocks);
        createGrid(newBlocks);
    }
    
});

black.addEventListener('click', () => {
    
});

rainbow.addEventListener('click', () => {
    
});

eraser.addEventListener('click', () => {
    document.getElementsByClassName('row').onmouseover
});

clear.addEventListener('click', () => {
    clearGrid(oldBlocks); 
});