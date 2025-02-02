import { PlaceShape } from "./board/htmlLink.js";
import IShape from "./shapes/I.js";
import JShape from "./shapes/J.js";
import LShape from "./shapes/L.js";
import OShape from "./shapes/O.js";
import SShape from "./shapes/S.js";
import TShape from "./shapes/T.js";
import ZShape from "./shapes/Z.js";

const shapeClasses = [new IShape(), new JShape(), new LShape(), new OShape(), new SShape(), new TShape(), new ZShape()]

function spawnNewShape(boardInstance) {
  let shape = PickRandomShape()
  let response = PlaceShape(shape, boardInstance)
  //console.log(response.boardInstance);
  
  shape = response.shape
  boardInstance = response.boardInstance
  
  
  return {shape: shape, boardInstance: response.boardInstance}
}

function PickRandomShape() {
  return shapeClasses[Math.floor(Math.random() * shapeClasses.length)]
}

export { 
  spawnNewShape,
  shapeClasses
};