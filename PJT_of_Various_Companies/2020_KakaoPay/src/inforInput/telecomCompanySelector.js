const selectorLabel = telecomCompanyData => {
  let element = document.createElement("label");
  element.className = "descriptionClass";
  element.innerHTML ="통신사";
  element.setAttribute("for", "selectedTelecomCompany");
  element.appendChild(selector(telecomCompanyData));

  return element;
}

const selector = telecomCompanyData => {
  let element = document.createElement("select");
  element.id = "selectedTelecomCompany";
  
  telecomCompanyData.forEach((value, idx) => {
    let node = document.createElement("option");
    node.id = value.code;
    node.innerHTML = value.description;
    element.appendChild(node);
  });

  element.addEventListener("change", function(event) {
    document.querySelector("#phoneNumber").focus();
  });

  return element;
}

const telecomCompanySelector = telecomCompanyData => {
  let element = document.createElement("div");
  element.id = "telecomCompanySelector";

  element.appendChild(selectorLabel(telecomCompanyData));
  
  return element;
}

export default telecomCompanySelector;
