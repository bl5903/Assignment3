let numRows = 0;
let numCols = 0;
let colorSelected;

var buttonPress = document.getElementsByTagName("button")
    addRow = button[0],
    addCol = button[1],
    removeRow = button[2],
    removeCol = button[3],
    fillAll = button[4],
    clearAll = button[5],
    fillUn = button[6];

//when clicked it calls the add row function
addRow.addEventListener("click", addR);
addCol.addEventListener("click", addC);
removeRow.addEventListener("click", removeR);
removeCol.addEventListener("click", removeC);
fillAll.addEventListener("click", fill);
clearAll.addEventListener("click",clearAll);
fillUn.addEventListener("click", fillU);

let grid = document.getElementById("grid");//call the grid id in index.html
let tr = document.createElement("tr");
grid.appendChild(tr);
//Add a row
function addR() {
     alert("Clicked Add Row")
     numRows++;
     console.log(tr);
}
//Add a column
function addC() {
    alert("Clicked Add Col")
}

//Remove a row
function removeR() {
    alert("Clicked Remove Row")
}
//Remove a column
function removeC() {
    alert("Clicked Remove Col")
}
//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

function fill(){
    alert("Clicked Fill All")
}

function clearAll(){
    alert("Clicked Clear All")
}

function fillU(){
    alert("Clicked Fill All Uncolored")
}
