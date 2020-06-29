const questionMarkStyeld = () => {
  let element = document.createElement("div");
  element.id = "questionMark";
  element.innerHTML = "?";

  return element;
}

const questionMark = () => {
  let element = document.createElement("div");
  element.id = "questionMarkWrapper";
  element.appendChild(questionMarkStyeld());

  return element;
}

export default questionMark;


