const userInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");

const checkPalindrome = (input) => {
  const originalinpt = input;

  if (input === "") {
    alert("Please enter some text");
    return;
  }
  resultDiv.replaceChildren();
  const lowerCaseStr = input.replace(/[^A-Za-z0-9]/gi, "").toLowerCase();
  let resultMsg = `<strong>${originalinpt}</strong> 
                    ${
                      lowerCaseStr === [...lowerCaseStr].reverse().join("")
                        ? "is"
                        : "is not"
                    } a paindrome.`;
  const pTag = document.createElement("p");
  pTag.className = "user-input";
  pTag.innerHTML = resultMsg;
  resultDiv.appendChild(pTag);

  resultDiv.classList.remove("hidden");
};
checkBtn.addEventListener("click", () => {
  checkPalindrome(userInput.value);
  userInput.value = "";
});
userInput.addEventListener("keydown", (e) => {
  if (e.key === "enter") {
    checkPalindrome(userInput.value);
    userInput.value = "";
  }
});
