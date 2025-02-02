import { shapeClasses } from "../spawner.js";
import Board from "./board.js";

function PlaceShape(shape, boardInstance) {

  for (let y = 0; y < shape.shape.length; y++) {
    for (let x = 0; x < shape.shape[y].length; x++) {     
      if (shape.shape[y][x] == 1) {
        
        let X_Diff = x - shape.anchor[1]
        let Y_Diff = y - shape.anchor[0]
        
        boardInstance.boardValues[Y_Diff][4 + X_Diff] = shape.id
        
        
        shape.coord.push([0 + Y_Diff, 4 + X_Diff]);
      }
    }
  }
  
  boardInstance = updateBoard(boardInstance)
  return {shape: shape, boardInstance: boardInstance}
}

function updateBoard(boardInstance) {
  
  let cells = document.querySelectorAll('.case')
  
  let row = 0
  let col = 0
  
  //console.log(boardInstance.boardValues);
  for (let i = 0; i < cells.length; i++) {
    col = i % 10;
    row = Math.floor(i / 10);
    
    if(boardInstance.boardValues[row][col] != 0) {
      cells[i].style.backgroundColor = shapeClasses.find(shape => shape.id == boardInstance.boardValues[row][col]).color
    }
  }
  
  return new Board(boardInstance.boardValues)
}

export {
  updateBoard,
  PlaceShape
}