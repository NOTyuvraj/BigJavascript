const GRIDSIDE = 600;
let cells = 16;

const sketchArea = document.querySelector("#sketchArea");
sketchArea.style.width = `${GRIDSIDE}px`;
sketchArea.style.height = `${GRIDSIDE}px`;

function changerBackgroundColor(){
    this.style.backgroundColor = "black";
}

function createGridCells(){
    for(let i=0 ; i< (cells * cells) ; i++){
        const gridCell = document.createElement("div");

        gridCell.style.width = `${(GRIDSIDE/cells)-2}px`;
        gridCell.style.height = `${(GRIDSIDE/cells)-2}px`;
        gridCell.classList.add("cell");

        sketchArea.appendChild(gridCell);

        gridCell.addEventListener("mouseover" , changerBackgroundColor)
    }
}


createGridCells();