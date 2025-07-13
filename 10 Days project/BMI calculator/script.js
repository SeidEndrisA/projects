document.getElementById("bmiForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const gender = document.getElementById("gender").value;
  const heightfeet = parseInt(document.getElementById("height-feet").value);
  const heightinches = parseInt(document.getElementById("height-inches").value);
  const weight = parseFloat(document.getElementById("weight").value);

  if (gender && heightfeet && heightinches && weight) {
    const heightInMeters = (heightfeet * 12 + heightinches) * 0.0254;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    let category = "";
    let resultElement = document.getElementById("result");

    if (bmi < 18.5) {
      category = "Underweight";
    } else if (bmi < 24.9) {
      category = "Normal weight";
    } else if (bmi < 29.9) {
      category = "Overweight";
    } else {
      category = "Obesity";
    }

    let resultMessage = `Your BMI is <strong>${bmi}</strong>`;
    resultMessage += " category: <strong>" + category + "</strong>";

    resultElement.innerHTML = resultMessage;
  }
});
