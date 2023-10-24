// 16x16 grid of square divs

const container = document.getElementById("container");

// Create a button, locate container for button, append button
const buttonContainer = document.querySelector(".button-top");
const button = document.createElement('button');
button.textContent = 'Click Me';

buttonContainer.appendChild(button);


console.log("hey hey mate")

// Function to prompt the user for rows and columns
function promptForGridSize() {
    const rows = parseInt(prompt("Enter the number of rows:"));
    const columns = parseInt(prompt("Enter the number of columns:"));

    if (!isNaN(rows) && !isNaN(columns)) {
        createGrid(rows, columns);
    } else {
        alert("Please enter valid numbers for rows and columns.");
    }
}


function createGrid(numRows, numCols) {
    // Clear the existing grid if needed
    container.innerHTML = '';

    for (let i = 0; i < numRows * numCols; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        container.appendChild(gridItem);

        gridItem.addEventListener('mouseover', () => {
            // Change the background color when the mouse is over the grid item
            gridItem.style.backgroundColor = 'blue'; // You can choose any color you like
        });

        // Add a mouseout event listener to revert the color when the mouse moves away
        gridItem.addEventListener('mouseout', () => {
            setTimeout(() => {
                gridItem.style.backgroundColor = ''; // Revert to the original color (empty string)
            }, 500);
    });
    };
}

button.onclick = promptForGridSize;







// Set up a “hover” effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would.

// 