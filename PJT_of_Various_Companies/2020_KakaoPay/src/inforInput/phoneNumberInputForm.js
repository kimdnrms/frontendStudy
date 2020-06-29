const defaultPhoneNumber = "010 1234 5678";

const numberLabel = () => {
  let element = document.createElement("label");
  element.id = "phoneNumberLabel";
  element.className = "descriptionClass";
  element.innerHTML ="휴대폰 번호";
  element.setAttribute("for", "phoneNumber");

  return element;
}

const autoSpacePhone = str => {
  str = str.replace(/[^0-9]/g, "");
  let tmp = "";
  if( str.length < 4){
      return str;
  }else if(str.length < 7){
      tmp += str.substr(0, 3);
      tmp += " ";
      tmp += str.substr(3);
      return tmp;
  }else if(str.length < 11){
      tmp += str.substr(0, 3);
      tmp += " ";
      tmp += str.substr(3, 3);
      tmp += " ";
      tmp += str.substr(6);
      return tmp;
  }else{              
      tmp += str.substr(0, 3);
      tmp += " ";
      tmp += str.substr(3, 4);
      tmp += " ";
      tmp += str.substr(7);
     
      return tmp;
  }

  return str;
}

const numberInput = () => {
  let element = document.createElement("input");
  element.setAttribute("type", "text");
  element.id = "phoneNumber";
  element.placeholder = defaultPhoneNumber;
  element.maxLength = 13;
  element.addEventListener("focus", function(event) {
    this.value = "";
  });
  element.addEventListener("keyup", function(event) {
    this.value = autoSpacePhone(this.value);
    let thisLabel = document.querySelector("#phoneNumberLabel");
    let thisBorder = document.querySelector("#phoneNumberInputForm");
    let value = this.value;
    if(value.length === 12 || value.length === 13) {
      thisLabel.style.color = "#4f4f4f";
      thisBorder.style.borderBottomColor = "#4f4f4f";
      if(value.length === 13) {
        document.querySelector("#socialNumber").focus();
      }
    } else {
      thisLabel.style.color = "red";
      thisBorder.style.borderBottomColor = "red";
    }
  });

  return element;
}

const phoneNumberInputForm = () => {
  let element = document.createElement("div");
  element.id = "phoneNumberInputForm";

  element.appendChild(numberLabel());
  element.appendChild(numberInput());
  
  return element;
}

export default phoneNumberInputForm;