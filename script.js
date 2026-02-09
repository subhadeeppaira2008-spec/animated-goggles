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

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 300 - 150;
  const y = Math.random() * 80;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

yesBtn.addEventListener("click", () => {
  step++;

  if (step < questions.length) {
    questionEl.textContent = questions[step];
    noBtn.style.transform = "translate(0, 0)";
  } else {
    startCountdown();
  }
});

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
