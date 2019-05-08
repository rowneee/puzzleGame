//Arrow Key Info//
// ArrowLeft = 37
// ArrowRight = 39
// ArrowUp = 38
// ArrowDown = 40

/************************************************/
//            All Links and URLs                //
/************************************************/

const BASE_URL = 'http://localhost:3000/api/v1'
const USER_URL = `${BASE_URL}/users`

/************************************************/
//        All Variables and Data                //
/************************************************/
let level = 1
let levelImages = {
  "one": "/Users/elizabethzevin/Development/code/FInal Projects/puzzleGame/backend/app/pics/evans.jpg",
  "two": "/Users/elizabethzevin/Development/code/FInal Projects/puzzleGame/backend/app/pics/alex.jpg",
  "three": "three url"
}
const levelImage1 = "/Users/elizabethzevin/Development/code/FInal Projects/puzzleGame/backend/app/pics/evans.jpg"
const levelImage2 = "/Users/elizabethzevin/Development/code/FInal Projects/puzzleGame/backend/app/pics/alex.jpg"
const gameBoard = document.getElementById("game-board")
const timer = document.querySelector('button.timer')
const table = document.getElementById("table")
let allTiles = document.getElementsByClassName("tile")
let h3 = document.getElementsByTagName('h3')[0]
let score = h3.innerText
const tile9 = document.getElementsByClassName("tile tile9")
let newTiles = Array.from(allTiles)
const form = document.querySelector('.createUser')
const inputName = document.getElementsByClassName('input-text')[0]
const showName = document.getElementById('showName')
const scoreBoard = document.getElementById('score-board')
let t
//*************************************************//
//              Swapping Tiles-Website            //
//*************************************************//
function swapTiles(cell1,cell2) {
  let swappy = document.getElementById(cell1).className;
  document.getElementById(cell1).className = document.getElementById(cell2).className;
  document.getElementById(cell2).className = swappy;
}

function newImage(){
  switch (level){
    case 2:
    newTiles.forEach(tile => {
      tile.style.backgroundImage = `url(${levelImage2})`
    })
  break;
  }
}

// function shuffle() {
// // Use nested loops to access each cell of the 3x3 grid
// for (let row=1;row<=3;row++) { //For each row of the 3x3 grid
//    for (let column=1;column<=3;column++) { //For each column in this row
// //
//     let row2=Math.floor(Math.random()*3 + 1); //Pick a random row from 1 to 3
//     let column2=Math.floor(Math.random()*3 + 1); //Pick a random column from 1 to 3
// //
//     swapTiles("cell"+row+column,"cell"+row2+column2); //Swap the look & feel of both cells
//   }
// }
// let allTiles = document.getElementsByClassName("tile")
// }

function clickTile(row,column) {
  let cell = document.getElementById("cell"+row+column);
  console.log("this is cell", cell)
  let tile = cell.className;
  console.log("this is tile", tile)
  if (tile!="tile9") {
       //Checking if white tile on the right
       if (column<3) {
         if ( document.getElementById("cell"+row+(column+1)).className=="tile tile9") {
           swapTiles("cell"+row+column,"cell"+row+(column+1));
         }
       }
       //Checking if white tile on the left
       if (column>1) {
         if ( document.getElementById("cell"+row+(column-1)).className=="tile tile9") {
           swapTiles("cell"+row+column,"cell"+row+(column-1));
         }
       }
         //Checking if white tile is above
       if (row>1) {
         if ( document.getElementById("cell"+(row-1)+column).className=="tile tile9") {
           swapTiles("cell"+row+column,"cell"+(row-1)+column);
         }
       }
       //Checking if white tile is below
       if (row<3) {
         if ( document.getElementById("cell"+(row+1)+column).className=="tile tile9") {
           swapTiles("cell"+row+column,"cell"+(row+1)+column);
         }
       }
  }
levelComplete()
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
  levelComplete()
})

//************************************************/
//                     Timer                     //
/************************************************/
timer.addEventListener('click',e=>{
    let seconds = 0, minutes = 0,
        stop = document.getElementById('stop')

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
   }
  function timer() {
       t = setInterval(add, 1000);
   }
   stop.onclick = function stopClock() {
       clearInterval(t);
   }
 })


//************************************************/
//               Level Complete                  //
/************************************************/
function levelComplete(){
  let newTiles = Array.from(allTiles)
  let all = []
  let n = 0
  // get tile number from classname //
  newTiles.forEach(tile => {
   all.push(tile.className.split('')[9])
  })
  //sort array in a new array//
  let order = all.slice().sort(function(a, b) {
    return a - b;
  })
  //iterate over each element of array and compare if they match//
  for (i = 0; all.length>i; i++ ){
    if (all[i] === order[i]){
      console.log("these match")

    }else {
      n++
      console.log("you can do this!")
    }
  }
  //if they match n will not increase from previous loop//
  if (n !== 0){
    console.log("please keep trying")
  } else {
    gameOver()
  }
}

/************************************************/
//                  Game Over                   //
/************************************************/

function gameOver(){
  // get score time //
  let score = h3.innerText
  // stop timer function //
    clearInterval(t)
    level++
    newImage()
  console.log(score)
  console.log("You won! across screen")
  console.log("new image/level")
}


//* announce level complete or whatever somewhere on screen

//* render new tile image


/************************************************/
//              Render New Image                //
/************************************************/

//*


/************************************************/
//                  Save Score                  //
/************************************************/
// function getScore(){
// let score = h3.innerText
// let newScore = 0
// score = score.split("")
// newScore = parseInt(score[0] + score[1] + score[3] + score[4])
// if (score > 0){
// newScore += (100 - score)
// }else {
//   newScore
// }
// console.log(newScore)
// return newScore
// }
//
// /************************************************/
// //                Show User                     //
// /************************************************/
// form.addEventListener('submit', e =>{
//   e.preventDefault();
//   let name = inputName.value
//   console.log("name is", name)
//   fetch(USER_URL, {
//     method:'POST',
//     headers: {
//          "Content-type": "application/json",
//          "Accept": "application/json"
//        },
//     body: JSON.stringify({
//       name: name
//     })
//   })
//   .then(
//     res => {
//     if(res.status == 201) {
//       // console.log("name string is", name)
//       // console.log(renderName(name))
//       form.style.display = "none"
//       renderName(name)
//     } else {
//       renderName("sorry something went wrong")
//     }
//   })
//   form.reset()
// /************************************************/
// //                  ScoreBoard                   //
// /************************************************/
//
// fetch(USER_URL)
//  .then(res => res.json())
//  .then(users =>{
//    newUser = users[users.length-1]
//    // getScore()
//    scoreBoard.innerHTML += `<h4>${name} ${0}</h4>`
//  })
//
// })
// const renderName = (user) => {
//  // console.log(user)
//  showName.innerHTML += `<p> Welcome, ${user}! </p>`
// }
