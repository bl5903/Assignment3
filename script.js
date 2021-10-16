let numRows = 0;
let numCols = 0;
let colorSelected;

//Add a row
function addR() {
     //alert("Clicked Add Row")
     var myRow = document.getElementById("grid");
     var newRow = myRow.insertRow(-1);
     var newCell = newRow.insertCell(-1);
     //increase count of rows
     numRows++;
     return numRows;
}
function addC() {
    //alert("Clicked Add Col")
    let myCol = document.getElementById("grid");
    for (let i=0; i<myCol.rows.length; i++){
      let td = document.createElement("td");
      myCol.rows[i].appendChild(td);
    }
    numCols++;
    return numRows;
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
    return colorSelected;
}

function fill(){
  //alert("Clicked Fill All");
let grid = document.getElementById("grid");
grid = grid.getElementsByTagName("td");
for (let i = 0; i < grid.length; i++){
    grid[i].style.backgroundColor = colorSelected;
}
}

function clearAll(){
    alert("Clicked Clear All")
    var delete_grid = document.getElementById("grid");
    delete_grid.innerHTML = "";
}

function fillU(){//Similar to fill all function
  //basically filling up any empty circles
    alert("Clicked Fill All Uncolored")
  let grid = document.getElementById("grid");
  let uncolor_grid =
  grid = grid.getElementsByTagName('td');
  for(let i = 0; i < grid.length; i++){
    grid[i].style.backgroundColor = colorSelected;
  }
}
