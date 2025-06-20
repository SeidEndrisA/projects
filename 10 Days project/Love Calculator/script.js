// Love Calculator JavaScript Code
function calculateLove() {
  const name1 = document.getElementById("name1").value.trim();
  const name2 = document.getElementById("name2").value.trim();
  const resultDiv = document.getElementById("result");
  const messageDiv = document.getElementById("message");
  const sound = document.getElementById("loveSound");

  if (!name1 || !name2) {
    resultDiv.innerHTML = "Please enter both names!";
    messageDiv.innerHTML = "";
    return;
  }

  const loveScore = Math.floor(Math.random() * 100) + 1;
  let message = "";

  if (loveScore > 90) {
    message = "💖 Soulmates! A perfect match!";
  } else if (loveScore > 70) {
    message = "😍 Strong connection!";
  } else if (loveScore > 50) {
    message = "😊 There's potential!";
  } else if (loveScore > 30) {
    message = "🙂 Maybe just friends.";
  } else {
    message = "😅 Not looking great... but who knows?";
  }

  resultDiv.innerHTML = `${name1} ❤️ ${name2} have a love score of ${loveScore}%!`;
  messageDiv.innerHTML = message;

  // Play sound
  sound.play();

  // Save to localStorage
  const history = JSON.parse(localStorage.getItem("loveHistory")) || [];
  const entry = `${name1} ❤️ ${name2} — ${loveScore}%`;
  history.unshift(entry); // Add to top
  if (history.length > 10) history.pop(); // Keep only 10 entries
  localStorage.setItem("loveHistory", JSON.stringify(history));
  displayHistory();
}

function displayHistory() {
  const historyList = document.getElementById("historyList");
  const history = JSON.parse(localStorage.getItem("loveHistory")) || [];
  historyList.innerHTML = "";
  history.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    historyList.appendChild(li);
  });
}

// Show saved history on load
window.onload = displayHistory;
