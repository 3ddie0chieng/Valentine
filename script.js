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
      <p><strong> SEE YOU SOON :) </strong></p>
      <button class="result-btn">
        Click Here!!!
      </button>
    </div>
  `;

  const resultBtn = card.querySelector('.result-btn');
  if (resultBtn) {
    resultBtn.addEventListener('click', (ev) => {
      ev.stopPropagation();
      alert("For tabby's eyes only 😉");
    });
  }
});

// NO → playful message (no popups)
noBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  text.innerText = "Please reconsider 😌💖";
});
