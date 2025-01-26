const GRIDSIDE = 600;
let cellsPerSide = 16;

const sketchArea = document.querySelector("#sketchArea");
const sliderContainer = document.querySelector("#slider-container");
const slider = document.querySelector("#slider");
const sliderValue = document.querySelector("#slider-value");

const colorSelector = document.querySelector("#colorSelector");
let drawingColor = colorSelector.value;

sliderValue.textContent = `${slider.value} x ${slider.value} (Grid)`;
sketchArea.style.width = sketchArea.style.height = `${GRIDSIDE}px`;

function changeBackgroundColor(){
    this.style.backgroundColor = drawingColor;
}

function resetBg(){
    this.style.backgroundColor = "white"
}

function createGridCells(cellsPerSide){
    const numberOfSquare = (cellsPerSide * cellsPerSide);
    const heightAndWidth = `${(GRIDSIDE / cellsPerSide)-2}px` 

    for(let i=0 ; i< numberOfSquare; i++){
        const gridCell = document.createElement("div");

        gridCell.style.width = gridCell.style.height = heightAndWidth;
        gridCell.classList.add("cell");

        sketchArea.appendChild(gridCell);

        gridCell.addEventListener("mouseover" , changeBackgroundColor)
    }
}

function removeGridCells(){
    while(sketchArea.firstChild){
        sketchArea.removeChild(sketchArea.firstChild)
    }
}

function resetCells(){
    removeGridCells();
    const val = document.querySelector("#slider").value;
    createGridCells(val);
}


function changeGrid(ele){
    removeGridCells();
    sliderValue.textContent = `${ele} x ${ele} (Grid)`;
    createGridCells(ele);
}

colorSelector.addEventListener("input" , (e) => {
    drawingColor = e.target.value;
})


createGridCells(16);