(() => {
  const formElem = document.getElementById("form-cipher");
  const textElem = formElem.querySelector("#text");
  const result = formElem.querySelector(".result");

  if (!formElem || !textElem || !result) return false;

  formElem.addEventListener("submit", (e) => {
    e.preventDefault();
    result.innerHTML = "Result: " + rot13(textElem.value);
  });
})();

const rot13 = (str) => {
  let decodedStr = "";
  const regexSpace = /^\s*$/; // kiểm tra chuỗi rỗng hoặc chỉ chứa khoảng trắng.

  if (regexSpace.test(str))
    return (decodedStr = `<span style="color: red">empty string cannot be decoded</span>`);

  let strUp = str.toUpperCase();
  for (let i = 0; i < strUp.length; i++) {
    let letter = strUp[i];
    console.log(typeof letter);
    if (letter.match(/[A-Z]/)) {
      let code = strUp.charCodeAt(i);
      letter = String.fromCharCode(((code - 65 + 13) % 26) + 65);
    }

    decodedStr += letter;
  }

  return decodedStr;
};
