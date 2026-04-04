function checkPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function analyzeNum() {
  const num = parseInt(document.getElementById("numInput").value);
  const resultBox = document.getElementById("resultBox");
  resultBox.style.display = "block";

  if (isNaN(num)) {
    resultBox.innerHTML = "<p>Please Enter a Valid Number.</p>";
    return;
  }

  // checking if a number is odd or even
  const checkOddEven = num % 2 === 0 ? "Even" : "Odd";

  //checking if a number is positive or negative
  const checkNegPos = num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";

  // checking if a number is prime or not
  const isPrime = checkPrime(num)
    ? "Yes, it's a prime number"
    : "No, It's not a prime number";

  // square and cube
  const square = num * num;
  const cube = num * num * num;

  // Sum of digits
  let sumNum = Math.abs(num); // for negative numbers

  let str = sumNum.toString(); 
  let digits = str.split(""); 
  let sumDigits = 0;

  for (let i = 0; i < digits.length; i++) {
    sumDigits += parseInt(digits[i]); 
  }

  resultBox.innerHTML = `
        <p><strong>Even/Odd:</strong> ${checkOddEven}</p>
        <p><strong>Positive/Negative:</strong> ${checkNegPos}</p>
        <p><strong>Prime:</strong> ${isPrime}</p>
        <p><strong>Square:</strong> ${square}</p>
        <p><strong>Cube:</strong> ${cube}</p>
        <p><strong>Sum of Digits:</strong> ${sumDigits}</p>   
    `;
}
