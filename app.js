let gridSize = 0;

const btn = document.querySelector("#btn");
btn.addEventListener("click", function(){
    let input = prompt("Enter a grid size (100 or lower):");
    createGrid(input);
});

const container = document.querySelector("#container");

createGrid(16);

function createGrid(rows){
    rows = parseInt(rows);
    if(rows > 100){
        alert("Introduce a number equal or less than 100");
        return;
    }
    gridSize = rows * rows;
    container.innerHTML = "";

    for(let i = 0; i < gridSize; i++){
        const div = document.createElement("div");
        div.className = `grid`;
        div.addEventListener("mouseover", function(){
            div.style.backgroundColor = "black";
        })
        container.appendChild(div);
    }

    const style = document.createElement("style");
    style.innerText = `  
    .grid{
        height: ${800/rows}px;
        width: ${800/rows}px;
    }`;
    const body = document.head.appendChild(style);
}