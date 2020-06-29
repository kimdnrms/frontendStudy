const userNameLabel = () => {
  let element = document.createElement("label");
  element.className = "descriptionClass";
  element.innerHTML = "이름";
  element.setAttribute("for", "userName");

  return element;
}

const userNameInput = () => {
  let element = document.createElement("input");
  element.id = "userName";
  element.placeholder = "홍길동";
  element.setAttribute("type", "text");
  element.maxLength = 9;
  element.addEventListener("focus", function(event) {
    this.className = "labelValidationFailed"
    this.value = "";
  });
  element.addEventListener("keyup", function(event) {
    if(document.querySelector("#userName") !== null) {
      let name = this.value;
      const pattern= /[a-z0-9]|[ \[\]{}()<>?|`~!@#$%^&*-_+=,.;:\""\\]/g;
      this.value = name.replace(pattern, "");
    }
  });

  return element;
}

const userNameInputForm = () => {
  let element = document.createElement("div");
  element.id = "userNameInputForm";

  element.appendChild(userNameLabel());
  element.appendChild(userNameInput());
  
  return element;
}

export default userNameInputForm;
