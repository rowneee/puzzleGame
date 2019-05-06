//Arrow Key Info//
// ArrowLeft = 37
// ArrowRight = 39
// ArrowUp = 38
// ArrowDown = 40

/************************************************/
//        All Variables and Data                //
/************************************************/
//fetch
// populate array
//array.push({})
// const numbers =[1, 2, 3] //not actual data//
const gameBoard = document.getElementById("game-board")

//************************************************/
//              Switching Tiles                  //
/************************************************/

//////////////Iterate Over All Tiles/////////////
// function swap() {
//   numbers.forEach(num => {
//     tiles = document.querySelector(".tiles")
//     table = document.create
//     tiles.innerHTML += `<span data-id="number_id"${num} >${num}</span>`
//   })
//   tiles.innerHTML += `<span class="card empty"></span>`
// }
// swap();
// *needs to be made dynamic *

//*************************************************//
//              Swapping Tiles-Website            //
//*************************************************//
function swapTiles(cell1,cell2) {
  let swappy = document.getElementById(cell1).className;
  document.getElementById(cell1).className = document.getElementById(cell2).className;
  document.getElementById(cell2).className = swappy;
}

function shuffle() {
//Use nested loops to access each cell of the 3x3 grid
for (let row=1;row<=3;row++) { //For each row of the 3x3 grid
   for (let column=1;column<=3;column++) { //For each column in this row

    let row2=Math.floor(Math.random()*3 + 1); //Pick a random row from 1 to 3
    let column2=Math.floor(Math.random()*3 + 1); //Pick a random column from 1 to 3

    swapTiles("cell"+row+column,"cell"+row2+column2); //Swap the look & feel of both cells
  }
}
}


function clickTile(row,column) {
  let cell = document.getElementById("cell"+row+column);
  console.log("this is cell", cell)
  let tile = cell.className;
  console.log("this is tile", tile)
  if (tile!="tile9") {
       //Checking if white tile on the right
       if (column<3) {
         if ( document.getElementById("cell"+row+(column+1)).className=="tile9") {
           swapTiles("cell"+row+column,"cell"+row+(column+1));
           return;
         }
       }
       //Checking if white tile on the left
       if (column>1) {
         if ( document.getElementById("cell"+row+(column-1)).className=="tile9") {
           swapTiles("cell"+row+column,"cell"+row+(column-1));
           return;
         }
       }
         //Checking if white tile is above
       if (row>1) {
         if ( document.getElementById("cell"+(row-1)+column).className=="tile9") {
           swapTiles("cell"+row+column,"cell"+(row-1)+column);
           return;
         }
       }
       //Checking if white tile is below
       if (row<3) {
         if ( document.getElementById("cell"+(row+1)+column).className=="tile9") {
           swapTiles("cell"+row+column,"cell"+(row+1)+column);
           return;
         }
       }
  }

}

//********************************************************



////////////////Create A Keydown Event///////////
document.addEventListener("keydown", function(e){
  // console.log("click")
  let mover = document.querySelector(".tile9")
  const row = mover.id.split("")[4]
  const column = mover.id.split("")[5]

  if (e.keyCode == 37 || e.keyCode == 38 || e.keyCode == 39 ||e.keyCode == 40)
  // debugger
  if(event.keyCode == 37  ) {
      let c = parseInt(column) + 1
      // debugger
      clickTile(row, c)
        console.log('row');
        console.log('c');
       console.log('Left was pressed');
  } else if(event.keyCode == 39) {
    let c = parseInt(column) - 1
    // debugger
    clickTile(row, c)
    console.log('row');
    console.log('c');
        console.log('Right was pressed');
  } else if(event.keyCode == 38) {
    const r = parseInt(row) + 1
    const c = parseInt(column)
    // debugger
    clickTile(r, c)
    console.log('r');
    console.log('column');
        console.log('Up was pressed');
  }else if(event.keyCode == 40) {
    const r = parseInt(row) - 1
    const c = parseInt(column)
    // debugger
    clickTile(r, c)
    // debugger
    console.log('r');
    console.log('column');
        console.log('Down was pressed');
  }else {
    clickTile(row, column)
    console.log("nope!")
  }
  // debugger
})

///To Do List
///1. grab last tile --done
///2. swap tile with adjacent tile

//************************************************/
//                  ScoreBoard                   //
/************************************************/

///To Do List
///1. Make Happen
