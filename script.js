const questions = [
  "Is this Hamood?",
  "Hamood Habibiii????",
  "My Hamommy?"
];

let step = 0;

const questionEl = document.getElementById("question");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const countdownEl = document.getElementById("countdown");
const finalEl = document.getElementById("final");
const heartsContainer = document.getElementById("hearts");

/* TELEPORTING NO BUTTON */
noBtn.addEventListener("mouseenter", () => {
  const x = Math.random() * (window.innerWidth - 120);
  const y = Math.random() * (window.innerHeight - 60);

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

/* YES CLICK */
yesBtn.addEventListener("click", () => {
  burstHearts();
  step++;

  if (step < questions.length) {
    questionEl.textContent = questions[step];
  } else {
    startCountdown();
  }
});

/* COUNTDOWN */
function startCountdown() {
  questionEl.classList.add("hidden");
  document.querySelector(".buttons").classList.add("hidden");
  countdownEl.classList.remove("hidden");

  let count = 5;
  countdownEl.textContent = count;

  const timer = setInterval(() => {
    count--;
    countdownEl.textContent = count;

    if (count === 0) {
      clearInterval(timer);
      countdownEl.classList.add("hidden");
      finalEl.classList.remove("hidden");
    }
  }, 1000);
}

/* HEART PARTICLES */
function burstHearts() {
  for (let i = 0; i < 12; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = "❤";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-20px";
    heart.style.fontSize = 16 + Math.random() * 14 + "px";
    heart.style.animationDuration = 4 + Math.random() * 3 + "s";

    heartsContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 7000);
  }
}
