import questionMark from "./questionMark.js";
import errorInfoContents from "./errorInfoContents.js";
import style from "./error.css";

const errorInfoContainer = () => {
  let element = document.createElement("div");  

  element.appendChild(questionMark());
  element.appendChild(errorInfoContents());

  return element;
}

export default errorInfoContainer;


