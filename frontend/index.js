//Arrow Key Info//
// ArrowLeft = 37
// ArrowRight = 39
// ArrowUp = 38
// ArrowDown = 40

/************************************************/
//        All Variables and Data                //
/************************************************/
const gameBoard = document.getElementById("game-board")
const timer = document.querySelector('button.timer')
const table = document.getElementById("table")

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



/************************************************/
//                 Keydown Event                //
/************************************************/

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

//************************************************/
//                     Timer                     //
/************************************************/
timer.addEventListener('click',e=>{
    let h3 = document.getElementsByTagName('h3')[0],
        seconds = 0, minutes = 0,
        stop = document.getElementById('stop'),
        t;
      timer();
   function add() {
       seconds++;
       if (seconds >= 60) {
           seconds = 0;
           minutes++;
           if (minutes >= 60) {
               minutes = 0;
           }
       }
       h3.textContent = (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
       timer();
   }
   function timer() {
       t = setTimeout(add, 1000);
   }
   stop.onclick = function() {
       clearTimeout(t);
   }
 })


//************************************************/
//                    End Game                   //
/************************************************/

function endGame(){
const allRows = table.children
const allCols = document.getElementsByClassName("row")
allRows.each(row => {
  columns = getColumns inner html
  columns.each( column => {
    //here
  })
})
for (row = 0; allRows.length > row; row++){
  console.log(allRows[row])
  // console.log( allRows[row]);
  // for (column = 0; allRows.length > column; column++){
  //   console.log(allRows[row][column])
  // }
}
debugger

}
endGame()
/************************************************/
//                  ScoreBoard                   //
/************************************************/

///To Do List
///1. Make Happen
