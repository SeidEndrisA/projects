function calculateLove() {
  const name1 = document.getElementById("name1").value.trim();
  const name2 = document.getElementById("name2").value.trim();
  const resultDiv = document.getElementById("result");
  const messageDiv = document.getElementById("message");

  if (!name1 || !name2) {
    resultDiv.innerHTML = "🚨 Please enter both names!";
    messageDiv.innerHTML = "";
    return;
  }

  const loveScore = Math.floor(Math.random() * 100) + 1;
  resultDiv.innerHTML = `${name1} ❤️ ${name2} = ${loveScore}%`;

  let message = "";
  if (loveScore > 90) {
    message = "💖 Soulmates! True love!";
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
  } else if (loveScore > 70) {
    message = "😍 You're a great match!";
  } else if (loveScore > 50) {
    message = "😊 There's something there!";
  } else if (loveScore > 30) {
    message = "🙂 Maybe give it time.";
  } else {
    message = "😅 Just friends, maybe?";
  }

  messageDiv.innerHTML = message;

  const history = JSON.parse(localStorage.getItem("loveHistory")) || [];
  history.unshift(`${name1} ❤️ ${name2} — ${loveScore}%`);
  if (history.length > 10) history.pop();
  localStorage.setItem("loveHistory", JSON.stringify(history));
  displayHistory();
}

function resetCalculator() {
  document.getElementById("name1").value = "";
  document.getElementById("name2").value = "";
  document.getElementById("result").innerHTML = "";
  document.getElementById("message").innerHTML = "";
}

function displayHistory() {
  const historyList = document.getElementById("historyList");
  const history = JSON.parse(localStorage.getItem("loveHistory")) || [];
  historyList.innerHTML = "";
  history.forEach((entry) => {
    const li = document.createElement("li");
    li.textContent = entry;
    historyList.appendChild(li);
  });
}

window.onload = displayHistory;
