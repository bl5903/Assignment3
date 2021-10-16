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
}

function clearAll(){
    alert("Clicked Clear All")
}

function fillU(){//Similar to fill all function
  //basically filling up any empty circles
    alert("Clicked Fill All Uncolored")
  let grid = document.getElementById("grid");
  grid = grid.getElementsByTagName('td');
  for(let i = grid.length - 1; i >= 0 ; i--){
    grid[i].style.backgroundColor = colorSelected;
  }
}
