import telecomCompanySelector from "./telecomCompanySelector.js";
import phoneNumberInputForm from "./phoneNumberInputForm.js";
import socialNumberInputForm from "./socialNumberInputForm.js";
import userNameInputForm from "./userNameInputForm.js";
import style from "./inforInput.css";


const inforInputContainer = (telecomCompanyData) => {
  let element = document.createElement("div");
  element.id = "informationContainer";

  element.appendChild(telecomCompanySelector(telecomCompanyData));  
  element.appendChild(phoneNumberInputForm());
  element.appendChild(socialNumberInputForm());
  element.appendChild(userNameInputForm());
  
  return element;
}

export default inforInputContainer;


