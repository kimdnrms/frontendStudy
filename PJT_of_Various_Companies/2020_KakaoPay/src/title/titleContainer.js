import title from "./title.js";
import titleDescription from "./titleDescription.js";
import style from "./title.css";

const titleContainer = () => {
  let element = document.createElement("div");
  element.id = "titleContainer";

  element.appendChild(title());  
  element.appendChild(titleDescription());

  return element;
}

export default titleContainer;


