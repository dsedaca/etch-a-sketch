let grid = document.getElementById('container');
const show = document.getElementById('show');
let containerStyles = document.styleSheets[0].cssRules[7].style; // Pulling information for the '#container' rule in the stylesheet. May need to change the number in the 'cssRules' portion to make sure it grabs the correct information
let containerHeight = containerStyles.getPropertyValue('height');
let containerWidth = containerStyles.getPropertyValue('width');
let divGrid;
let divRow;
let divRemove;
let oldBlocks = 0;
let divHeight;

function createGrid(num) {
    let figureDivHeight = parseInt(containerHeight) / parseInt(num);
    let figureDivWidth = parseInt(containerWidth) / parseInt(num);;
    let newDivHeight;
    let newDivWidth;

    for (let i = 0; i < num; i++) {
        divGrid = document.createElement('div');
        divGrid.innerHTML = 'Div ' + (i + 1);
        divGrid.style.backgroundColor = 'red';
        newDivHeight = figureDivHeight + 'px';
        newDivWidth = figureDivWidth + 'px';
        divGrid.style.height = newDivHeight;
        divGrid.style.width = newDivWidth;
        grid.appendChild(divGrid);
        for (let y = 0; y < num; y++) {
            divRow = document.createElement('span');
            divRow.innerHTML = 'Span ' + (y + 1);
            divRow.style.backgroundColor = 'red';
            newDivHeight = figureDivHeight + 'px';
            newDivWidth = figureDivWidth + 'px';
            divRow.style.height = newDivHeight;
            divRow.style.width = newDivWidth;
            grid.appendChild(divRow);
        }
    }

    oldBlocks = num;
}

function removeGrid (oldValue) {
    divRemove = document.getElementById('container').lastChild

    for (let i = oldValue; i > 0; i--) {
        divRemove.remove();
        divRemove = document.getElementById('container').lastChild
        for (let y = oldValue; y > 0; y--) {
            divRemove.remove();
            divRemove = document.getElementById('container').lastChild
        }
    }
}

show.addEventListener('click', () => {
    let numberOfBlocks = document.querySelector('#squares').value;
    let newBlocks = parseInt(numberOfBlocks);

    removeGrid(oldBlocks);
    createGrid(newBlocks);
});