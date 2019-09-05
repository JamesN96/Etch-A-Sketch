let container = document.getElementById("container");
let clearbtn = document.getElementById("clear");    

let row = 4; 
let column = 4;
createGrid();

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

clearbtn.addEventListener("click", function(e){
    container.innerHTML = " ";
    row = prompt("Enter number of rows");
    column = prompt("Enter number of columns");
    createGrid();
    hover();
})

