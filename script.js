let numRows = 0;
let numCols = 0;
let colorSelected;

//Add a row
function addR() {
     //alert("Clicked Add Row")
     let myRow = document.getElementById("grid");
     let tr = document.createElement("tr");
     if(numCols == 0){
       let td = document.createElement("td");
       tr.appendChild(td);
       td.onclick = function() {
            this.style.backgroundColor = document.getElementById("selectedID").value;
        };
       numCols++;
     }
     else{
       for(let i=0; i<numCols; i++){
         let td = document.createElement("td");
         tr.appendChild(td);
         td.onclick = function() {
              this.style.backgroundColor = document.getElementById("selectedID").value;
          };
       }
     }
     myRow.appendChild(tr)
     numRows++;
}
function addC() {
    //alert("Clicked Add Col")
    let myCol = document.getElementById("grid");
    for (let i=0; i<myCol.rows.length; i++){
      let td = document.createElement("td");
      myCol.rows[i].appendChild(td);
      td.onclick = function() {
           this.style.backgroundColor = document.getElementById("selectedID").value;
       };
    }
    numCols++;
    return numRows;
}

//Remove a row
function removeR() {
    //alert("Clicked Remove Row")
    if(numRows < 1){
        return;
    }
    else{
        document.getElementById("grid").deleteRow(numRows - 1);
        numRows--;
    }
}
//Remove a column
function removeC() {
    //alert("Clicked Remove Col")
    let cols = document.querySelectorAll("tr");
    for(let i = 0; i < numRows; i++){
        if(numCols > 0){
            cols[i].removeChild(cols[i].lastChild);
    	}
    }

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
    //alert("Clicked Clear All")
    let delete_grid = document.getElementById("grid");
    delete_grid.innerHTML = "";
}

function fillU(){
    //alert("Clicked Fill All Uncolored")
    let grid = document.getElementById("grid");
    let uncolor_grid =
    grid = grid.getElementsByTagName('td');
    for(let i = 0; i < grid.length; i++){
        if(grid[i].style.backgroundColor == ""){
            grid[i].style.backgroundColor = colorSelected;
        }
    }
}
