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

  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    console.log(typeof letter);
    if (letter.match(/[A-Z]/)) {
      let code = str.charCodeAt(i);
      letter = String.fromCharCode(((code - 65 + 13) % 26) + 65);
    }

    decodedStr += letter;
  }

  return decodedStr;
};
