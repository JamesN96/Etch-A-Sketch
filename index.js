//Selectors
let container = document.getElementById("container");
let clearbtn = document.getElementById("clear");    


// Initialise variables for creating number of grids
let row = 4; 
let column = 4;
createGrid();

// This function will create the grid squares inside the container div
function createGrid() {
    for(let i = 0; i < row; i++) {
        for(let j = 0; j < column; j++) {
            let div = document.createElement("div");
            div.style.width = "1fr";
            div.style.height = "1fr ";
            div.style.border = "1px solid black";
            div.className = "grid";
            container.style.gridTemplateColumns = "repeat(" + column + ", 1fr";
            container.style.gridTemplateRows = "repeat(" + row + ", 1fr";
            container.appendChild(div);
        }
    };
}

hover();

// This function adds a hover effect when mouse is over the grid sqaure
function hover() {
    let grids = document.querySelectorAll(".grid");

    grids.forEach(function(grid){
        grid.addEventListener("mouseover", function(e){
            grid.style.backgroundColor = "red";
        })
        // grid.addEventListener("mouseout", function(e){
        //     grid.style.backgroundColor = "white";
        // })
    })
}

// Event listener to reset the grid and create a new grid of a different size
clearbtn.addEventListener("click", function(e){
    container.innerHTML = " ";
    row = prompt("Enter number of rows");
    column = prompt("Enter number of columns");
    createGrid();
    hover();
})

