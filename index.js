let container = document.getElementById("container");
let grids = document.querySelectorAll(".grid");
let clearbtn = document.getElementById("clear");    

for(let i = 0; i < 4; i++) {
    for(let j = 0; j < 4; j++) {
        let div = document.createElement("div");
        div.style.width = "1fr";
        div.style.height = "1fr ";
        div.style.border = "1px solid green";
        div.className = "grid";
        container.appendChild(div);
    }
};



grids.forEach(function(grid){
    grid.addEventListener("mouseover", function(e){
        grid.style.backgroundColor = "red";
    })
    grid.addEventListener("mouseout", function(e){
        grid.style.backgroundColor = "white";
    })
})


clearbtn.addEventListener("click", function(e){
    container.innerHTML = "";
})