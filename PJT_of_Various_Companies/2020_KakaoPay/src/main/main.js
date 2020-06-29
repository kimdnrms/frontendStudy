import title from "../title/titleContainer.js";
import inforInput from "../inforInput/inforInputContainer.js";
import errorInfo from "../errorInfo/errorInfoContainer.js";
import terms from "../terms/termsContainer.js";
import requestCertifNum from "../requestCertifNum/requestCertifNumContainer.js";
import style from "./main.css"

const mainContainer = (telecomCompanyData, termsData) => {
  let element = document.createElement("div");
  element.id = "mainContainer"
  
  element.appendChild(title());  
  element.appendChild(inforInput(telecomCompanyData));
  element.appendChild(errorInfo());
  element.appendChild(terms(termsData));
  element.appendChild(requestCertifNum());

  return element;
}

export default mainContainer;


