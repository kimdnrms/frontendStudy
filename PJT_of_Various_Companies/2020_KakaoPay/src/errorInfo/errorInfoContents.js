const errorInfoContents = () => {
  let element = document.createElement("div");
  element.id = "errorInfoContents";
  element.innerHTML ="모든정보가 올바르게 입력되었음에도 인증번호 요청이 되지 않는 경우 가입하신 통신사에 문의해주세요.";

  return element;
}

export default errorInfoContents;


