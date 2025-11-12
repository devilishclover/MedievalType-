import { useState } from "react"
import './styles/Key.css'


function Key(props) {

  const [pressed, setPressed] = useState(false)
  const [isShifted, setIsShifted] = useState(false)

function shiftdown(e) {
  if (e.key === "Shift"){
    console.log("Shift key was pressed!")
    setIsShifted(true);
  }
}

function shiftup(e) {
  if (e.key === "Shift"){
    console.log("Shift key was released!")
    setIsShifted(false);
  }
}


  function keydown(e) {
  if (e.repeat) return;
  console.log(e.key + " was pressed!")
  if (e.key.toLowerCase() === props.keyName.toLowerCase()){
    setPressed(true);
  }
  if (e.key === "Shift" && props.keyName === "shift"){
    setPressed(true);
  }
}

function keyup(e) {
  console.log(e.key + " was lifted!")
  if (e.key.toLowerCase() === props.keyName.toLowerCase()){
    setPressed(false);
  }
  if (e.key === "Shift" && props.keyName === "shift"){
    setPressed(false);
  }
}

window.addEventListener("keydown", shiftdown);
window.addEventListener("keyup", shiftup);
window.addEventListener("keydown", keydown);
window.addEventListener("keyup", keyup);


  let className = "key";
  if (props.className) {
    className = `key ${props.className}`;
  }
  if (pressed) {
    className += " active";
  }

  let displayKey;
  if (props.keyName === "shift") {
    displayKey = "shift";
  } else if (isShifted) {
    displayKey = props.keyName.toUpperCase();
  } else {
    displayKey = props.keyName.toLowerCase();
  }

  return (
    <div className={className} >
      <p>{displayKey}</p>
    </div>
  )
} 

export default Key