let container = document.getElementById("container");

for(let i = 0; i < 4; i++) {
    for(let j = 0; j < 4; j++) {
        let div = document.createElement("div");
        div.style.width = "1fr";
        div.style.height = "1fr";
        div.style.border = "1px solid green";
        container.appendChild(div);
    }
};