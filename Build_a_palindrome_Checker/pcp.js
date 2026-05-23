function palindrome(str) {
  // Clean the string: remove non-alphanumeric characters and convert to lowercase
  const cleanedStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

  // Reverse the cleaned string
  const reversedStr = cleanedStr.split("").reverse().join("");

  // Compare the cleaned string with its reversed version
  return cleanedStr === reversedStr;
}

// Example usage with DOM manipulation (as required by FreeCodeCamp project)
const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");

checkBtn.addEventListener("click", () => {
  const inputValue = textInput.value;

  if (inputValue === "") {
    alert("Please input a value");
    return;
  }

  if (palindrome(inputValue)) {
    resultDiv.textContent = `${inputValue} is a palindrome`;
  } else {
    resultDiv.textContent = `${inputValue} is not a palindrome`;
  }
});
