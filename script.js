const gridContainer = document.querySelector(".grid-container");
const gridSizeButton = document.querySelector(".grid-size-btn");

gridSizeButton.addEventListener("click", () => {

    let squaresString = prompt("How many squares do you want?", "0");
    let squaresNumber = Number(squaresString);
    
    getRandomRgbNumber();
    gridContainer.innerHTML = "";
    
    for (let i = 0; i < squaresNumber; i++) {   
        let col = document.createElement("div");    
        col.classList.add("col");
        let colContent = col.innerHTML;
        colContent = "";
        
        gridContainer.appendChild(col);
        columns = document.querySelectorAll(".col");
    }
    columns.forEach((col) => {
        for (let i = 0; i < squaresNumber; i++) {
            
            let row = document.createElement("div");    
            row.classList.add("row");
            let rowContent = row.innerHTML;
            rowContent = "";
            
            col.appendChild(row); 
        };
    });
 });

function getRandomRgbNumber() {
    let randomRGBNumber = (Math.floor(Math.random() * 256));
    let r = randomRGBNumber;
    console.log(r);
    let g = randomRGBNumber;
    console.log(g);
    let b = randomRGBNumber;
    console.log(b);
    let RGB = 'rgb(${r},${g},${b})';
    console.log(RGB);
}




    


























