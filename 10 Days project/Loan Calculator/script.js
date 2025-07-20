document.getElementById("loanForm").addEventListener("submit", function (e) {
  e.preventDefault();
  // Get the input values
  const loanAmount = parseFloat(
    document.getElementById("loanAmountInput").value
  );
  const interestRate =
    parseFloat(document.getElementById("interestRateInput").value) / 100 / 12;
  const loanTerm = parseInt(document.getElementById("loanTermInput").value);
  // Validate the input values
  if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm)) {
    alert("Please enter valid numbers");
    return;
  }
  // Calculate the monthly payment using the formula
  const monthlyPayment =
    (loanAmount * interestRate) / (1 - Math.pow(1 + interestRate, -loanTerm));
  // Display the result
  document.getElementById("result").innerHTML =
    "<strong>Monthly Payment:</strong> $" +
    monthlyPayment.toFixed(2) +
    "<br />" +
    "<strong>Total Payment:</strong> $" +
    (monthlyPayment * loanTerm).toFixed(2);
});
