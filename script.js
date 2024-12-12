const gridContainer = document.querySelector(".grid-container");
const gridSizeButton = document.querySelector(".grid-size-btn");
let row = document.querySelector('.row');

gridSizeButton.addEventListener("click", function drawSquares() {

    let squaresString = prompt("How many squares do you want?", "0");
    let squaresNumber = Number(squaresString);

    if (squaresNumber > 100) {
        alert("The maximum number is 100.");
        squaresNumber = 100; 
    }

    gridContainer.innerHTML = "";
    
    for (let i = 0; i < squaresNumber; i++) {   
        let col = document.createElement("div");    
        col.classList.add("col");
        gridContainer.appendChild(col);
    }
    
    let columns = document.querySelectorAll(".col");
    
    columns.forEach((col) => {
        for (let i = 0; i < squaresNumber; i++) {
            let row = document.createElement("div");    
            row.classList.add("row");
            col.appendChild(row);
            row.addEventListener("mouseover", () => {
                let rColor = (Math.floor(Math.random() * 256));
                let gColor = (Math.floor(Math.random() * 256));
                let bColor = (Math.floor(Math.random() * 256));
                row.style.backgroundColor = `rgb(${rColor}, ${gColor}, ${bColor})`;
                /*row.style.opacity += '-0.1';*/
            })
        };    
    });  
})





    