const card = document.getElementById("card");
const text = document.getElementById("text");
const buttons = document.getElementById("buttons");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

// Reveal question
card.addEventListener("click", () => {
  if (text.innerText === "For You ❤️") {
    text.innerText = "Will you be my Valentine? 💖";
    buttons.classList.remove("hidden");
  }
});

// YES → show result box
yesBtn.addEventListener("click", (e) => {
  e.stopPropagation();

  card.innerHTML = `
    <div class="result">
      <img src="https://media.tenor.com/vhxp8VLoMOwAAAAM/hug-love.gif">

      <h2>Yay!</h2>
      <p><strong>Tired of playing therapist for your single friends?</strong></p>
      <button onclick="alert('Share this link 😉')">
        then click here!!!
      </button>
    </div>
  `;
});

// NO → playful message (no popups)
noBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  text.innerText = "Think again 😌💖";
});
