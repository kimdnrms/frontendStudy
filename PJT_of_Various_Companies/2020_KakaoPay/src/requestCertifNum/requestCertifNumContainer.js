import style from "./reqCert.css"

let result = {
  name : '',
  registerNumber : '',
  carrierCode : '',
  phoneNumber: '',
  termsCode : [],
}

const requestCertifNumContainer = () => {
  let element = document.createElement("button");
  element.id = "requestCertifNumArea";
  
  element.disabled = true;
  
  element.addEventListener("keyup", function(event) {
    if(document.querySelector("#userName") !== null) {
      let name = this.value;
      const pattern= /[a-z0-9]|[ \[\]{}()<>?|`~!@#$%^&*-_+=,.;:\""\\]/g;
      this.value = name.replace(pattern, "");
    }
  });
  
  element.addEventListener("click",  function(event) {

    console.log("result", result);
  });
  

  element.innerHTML ="인증번호 요청";

  return element;
}

export default requestCertifNumContainer;


