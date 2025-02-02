import Board from "./board/board.js";
import boardInstance from "./board/board.js";
import { updateBoard } from "./board/htmlLink.js";
import { spawnNewShape } from "./spawner.js"

function StartGame() {
  let shape = null
  let boardInstance = new Board()
  
  let gameTick = setInterval(() => {
    
    if(CheckEndGame() == true) {
      clearInterval(gameTick)
    }

    if(shape == null) {
      let response = spawnNewShape(boardInstance)
      shape = response.shape
      boardInstance = response.boardInstance
    }
    
    if(CanGoDown(shape, boardInstance)) {
      MoveDownShape(shape, boardInstance)
    }

    boardInstance = updateBoard(boardInstance)
  }, 1000);
}

function CheckEndGame() {

}

function CheckOutOfBound(shape) {
  
}

function CanGoDown(activeShape, boardInstance) {
  //console.log(boardInstance);
  
  for (let y = 0; y < boardInstance.boardValues[0].length; y++) {
    for (let x = 0; x < boardInstance.boardValues[1].length; x++) {
      if(boardInstance.boardValues[y][x] == activeShape.id) {
        if(boardInstance.boardValues[y + 1][x] != 0 && !activeShape.coord.some(coord => coord[0] == y && coord[1] == x)) {
          return false
        }else{
          return true 
        }
      }
    }
  }
}

function MoveDownShape(activeShape, boardInstance) {
  console.log("move down");
  
  for (let i = 0; i < activeShape.coord.length; i++) {
    boardInstance.boardValues[activeShape.coord[i][0]][activeShape.coord[i][1]] = 0
  }
  return activeShape
}

export {
  StartGame
}