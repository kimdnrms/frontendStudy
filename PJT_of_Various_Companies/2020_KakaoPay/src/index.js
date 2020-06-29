import mainContainer from "./main/main.js";

const telecomCompanyData = [
  {
    "code" : "SKT",
    "description" : "SKT",
  },
  {
    "code" : "KT",
    "description" : "KT",
  },
  {
    "code" : "LGT",
    "description" : "LG U+",
  },
  {
    "code" : "SKTMVNO",
    "description" : "SKT 알뜰폰",
  },
  {
    "code" : "KTMVNO",
    "description" : "KT 알뜰폰",
  },
  {
    "code" : "LGT",
    "description" : "LG U+ 알뜰폰",
  },
];

const termsData = [
  {
    "termsId": "1",
    "title": "본인확인 이용동의",
    "required": true,
  },
  {
    "termsId": "2",
    "title": "개인정보 수집/이용/취습 위탁동의",
    "required": true,
  },
  {
    "termsId": "3",
    "title": "고유식별번호 처리 동의",
    "required": true,
  },
  {
    "termsId": "4",
    "title": "(선택) 카카오 플러스 친추 추가 동의",
    "required": false,
  },
];



document.body.appendChild(mainContainer(telecomCompanyData, termsData));