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
const numbers =[1, 2, 3] //not actual data//
const gameBoard = document.getElementById("game-board")
const table = document.getElementById('table')

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
  var temp = document.getElementById(cell1).className;
  document.getElementById(cell1).className = document.getElementById(cell2).className;
  document.getElementById(cell2).className = temp;
}

function shuffle() {
//Use nested loops to access each cell of the 3x3 grid
for (var row=1;row<=3;row++) { //For each row of the 3x3 grid
   for (var column=1;column<=3;column++) { //For each column in this row

    var row2=Math.floor(Math.random()*3 + 1); //Pick a random row from 1 to 3
    var column2=Math.floor(Math.random()*3 + 1); //Pick a random column from 1 to 3

    swapTiles("cell"+row+column,"cell"+row2+column2); //Swap the look & feel of both cells
  }
}
}

function clickTile(row,column) {
  var cell = document.getElementById("cell"+row+column);
  var tile = cell.className;
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
table.addEventListener("keydown", function(e){
  // console.log("click")
  const movingTile = gameBoard.firstElementChild.lastElementChild
  if(event.keyCode == 37) {
       console.log('Left was pressed');
  } else if(event.keyCode == 39) {
        console.log('Right was pressed');
  } else if(event.keyCode == 38) {
        console.log('Up was pressed');
  }else if(event.keyCode == 40) {
        console.log('Down was pressed');
  }else {
    console.log("nope!")
  }
  // debugger
})

let h3 = document.getElementsByTagName('h3')[0],

    seconds = 0, minutes = 0,
    t;
  gameBoard.addEventListener('click',e=>{
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

 })


///To Do List
///1. grab last tile --done
///2. swap tile with adjacent tile

//************************************************/
//                  ScoreBoard                   //
/************************************************/

///To Do List
///1. Make Happen
