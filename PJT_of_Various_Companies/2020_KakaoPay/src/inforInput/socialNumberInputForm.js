const defaultSocialNumber = "880101-1";

const socialLabel = () => {
  let element = document.createElement("label");
  element.id = "socialNumberLabel";
  element.className = "descriptionClass";
  element.innerHTML ="주민등록번호";
  element.setAttribute("for", "socialNumber");

  return element;
}

const checkSocialNum = str => {
  let tmp = "";
  
  if(str.length < 6){
    return str.replace(/[^0-9]|/g, "");;
  }else if(str.length == 6){;
    tmp = String(str) + "-"; 
    return tmp;
  }else{
    if(isNaN(str[str.length-1])) {
      str.pop();
    }
  }

  return str;
}

const socialInput = () => {
  let element = document.createElement("input");  
  element.setAttribute("type", "text");
  element.id = "socialNumber";
  element.placeholder = defaultSocialNumber;
  element.maxLength = 8;
  element.addEventListener("focus", function(event) {
    this.value = "";
  });
  element.addEventListener("keyup", function(event) {
    this.value = checkSocialNum(this.value);
    
    let thisLabel = document.querySelector("#socialNumberLabel");
    let thisBorder = document.querySelector("#socialNumberInputForm");
    let value = this.value;
    if(value.length === 8) {
      thisLabel.style.color = "#4f4f4f";
      thisBorder.style.borderBottomColor = "#4f4f4f";
      document.querySelector("#userName").focus();
    } else {
      thisLabel.style.color = "red";
      thisBorder.style.borderBottomColor = "red";
    }
  });

  return element;
}

const socialNumberInputForm = () => {
  let element = document.createElement("div");
  element.id = "socialNumberInputForm";

  element.appendChild(socialLabel());
  element.appendChild(socialInput());
  
  return element;
}

export default socialNumberInputForm;
