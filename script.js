let newGrid = document.querySelector("button");
newGrid.addEventListener("click", () => {
    let userPrompt = prompt("Choose a width and height for your new grid of up to 100x100 (i.e. entering '64' will create a 64x64 grid).")
    let userGrid = parseFloat(userPrompt);
    if (!(Number.isInteger(userGrid) && userGrid > 0 && userGrid <= 100)) {
        alert("Invalid input, please try again. Valid inputs include any number 1 - 100.");
    } else {
        console.log("This part of the script is working.");
    }
});