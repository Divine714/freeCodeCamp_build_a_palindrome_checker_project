const input = document.getElementById("text-input"); 
const checkButton = document.getElementById("check-btn");
const resultMsg = document.getElementById("result-msg");

const cleanInput = (str) => {
    const regex = /[^A-Za-z0-9]/gi;
    return str.replace(regex, "").toLowerCase();
  }

const storeInput = text => {
  const storedText = text;

  if (text === "") {
  alert("Please input a value");  
  };

  const cleanText = cleanInput(text);

  if (cleanText === [...cleanText].reverse().join("")) {
    document.getElementById("result-msg").innerText = `${storedText} is a palindrome!`;
    resultMsg.removeAttribute("hidden");
  } else {
    document.getElementById("result-msg").innerText = `${storedText} is not a palindrome.`;
    resultMsg.removeAttribute("hidden");
    }  
};

checkButton.addEventListener("click", () => {
  storeInput(input.value);
  input.value = "";
});
