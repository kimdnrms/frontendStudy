import style from './terms.css';

const selectedAllTerms = termsLength => {
  let element = document.createElement("div");
  element.className = "selectedAllTermsArea";

  let node = document.createElement("label");
  node.setAttribute("for", "selectedAllTerms");
  node.innerHTML = "전체 동의하기";
  
  let checkbox = document.createElement("input");
  checkbox.id = "selectAll";
  checkbox.setAttribute("type", "checkbox");
  checkbox.addEventListener("change", function(e){
    let checkboxes = document.querySelectorAll(".termsSelected");
    for (let i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = this.checked;
    }
  });
  
  element.appendChild(checkbox);
  element.appendChild(node);

  return element;
}

const termsContainer = (termsData) => {
  let element = document.createElement("div");
  element.className = "termsContainer";
  
  termsData.forEach((value) => {
    let wrapper = document.createElement("div");
    wrapper.className = "termsArea";

    let node = document.createElement("label");
    node.setAttribute("for", value.termsId);
    node.innerHTML = value.title;
    
    let checkbox = document.createElement("input");
    checkbox.className = "termsSelected";
    checkbox.setAttribute("type", "checkbox");
        
    wrapper.appendChild(checkbox);
    wrapper.appendChild(node);

    element.appendChild(wrapper);
  });

  element.appendChild(selectedAllTerms(termsData.length));

  return element;
}

export default termsContainer;


