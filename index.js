const container = document.querySelector(".container");

// create array of boxes

function grid(){
    let gridSize = 16
    for(let i = 0; i < gridSize; i++){
        for(let j = 0; j < gridSize; j++){
            const div = document.createElement("div");
            div.addEventListener("mouseover", ()=> {
                div.setAttribute("style", "background-color: blue;");
            });
            container.appendChild(div);
        }
    }
}

grid();

// //mouseover can work as a hover
// container.div.addEventListener("mouseover", () => {
//     div.setAttribute("style", "background-color: blue;");
// });
