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
    let index = 1;
    gridSize = rows * rows;
    container.innerHTML = "";

    for(let i = 0; i < gridSize; i++){
        if(i !== 0 && i % rows === 0)
            index++;
        const div = document.createElement("div");
        div.className = `row${index}`;
        container.appendChild(div);
    }
}