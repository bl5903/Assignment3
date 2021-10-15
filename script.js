let numRows = 0;
let numCols = 0;
let colorSelected;

var buttonPress = document.getElementsByTagName("button")
    addRow = buttonPress[0],
    addCol = buttonPress[1],
    removeRow = buttonPress[2],
    removeCol = buttonPress[3],
    fillAll = buttonPress[4],
    clearAll = buttonPress[5],
    fillUn = buttonPress[6];

//when clicked it calls the add row function
addRow.addEventListener("click", addR);
addCol.addEventListener("click", addC);
removeRow.addEventListener("click", removeR);
removeCol.addEventListener("click", removeC);
fillAll.addEventListener("click", fill);
clearAll.addEventListener("click",clearAll);
fillUn.addEventListener("click", fillU);

//Add a row
function addR() {
     alert("Clicked Add Row")
     let grid = document.getElementById("grid");//call the grid id in index.html
     let tr = document.createElement("tr");
     grid.appendChild(tr);
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
