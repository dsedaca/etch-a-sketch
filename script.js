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
            divRow.style.backgroundColor = 'white';
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
    let square = document.getElementsByClassName('row');

    for (let i = 0; i < totalGrid.length; i++) {
        totalGrid[i].style.backgroundColor = 'white';
    }

    for (let i = 0; i < square.length; i++){
        square[i].addEventListener('mouseover', () => {
            square[i].style.backgroundColor = 'white';
        })
    }

}

function eraseGrid () {
    let square = document.getElementsByClassName('row');

    for (let i = 0; i < square.length; i++){
        square[i].addEventListener('mouseover', () => {
            square[i].style.backgroundColor = 'white';
        })
    }
}

function rainbowGrid () {
    let square = document.getElementsByClassName('row');

    const colors = ['FFF033', '40F00C', '0CF0C3', '0C47F0', 'CE5BF5', 'F56FC4', 'EC1038', 'F25757'];

    for (let i = 0; i < square.length; i++){
        square[i].addEventListener('mouseover', () => {
            let colorChoice = Math.floor(Math.random() * 8);
            square[i].style.backgroundColor = '#' + colors[colorChoice];
        })
    }
}

function blackGrid () {
    let square = document.getElementsByClassName('row');

    for (let i = 0; i < square.length; i++){
        square[i].addEventListener('mouseover', () => {
            square[i].style.backgroundColor = 'black';
        })
    }
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
    blackGrid ();
});

rainbow.addEventListener('click', () => {
    rainbowGrid ();
});

eraser.addEventListener('click', () => {
    eraseGrid ();
});

clear.addEventListener('click', () => {
    clearGrid(oldBlocks); 
});