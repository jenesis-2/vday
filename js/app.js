// ----------------------------
// GLOBAL STATE
// ----------------------------
const unlockedFishKey = "unlockedFish";
const currentQuestionKey = "currentQuestion";

function getUnlockedFish() {
  return JSON.parse(localStorage.getItem(unlockedFishKey)) || [];
}

function unlockFish(fishId) {
  const unlocked = getUnlockedFish();
  if (!unlocked.includes(fishId)) {
    unlocked.push(fishId);
    localStorage.setItem(unlockedFishKey, JSON.stringify(unlocked));
  }
}

function saveCurrentQuestion() {
  const filename = window.location.pathname.split('/').pop();
  localStorage.setItem(currentQuestionKey, filename);
}

function getLastQuestion() {
  return localStorage.getItem(currentQuestionKey) || "q1.html";
}

function goBackToQuestion() {
  const lastQuestion = getLastQuestion();
  window.location.href = "../questions/" + lastQuestion;
}

// ----------------------------
// QUESTION PAGE LOGIC
// ----------------------------
function initQuestionPage() {
  const correct = document.body.dataset.correct;
  const fish = document.body.dataset.fish;

  if (!correct || !fish) return;

  document.querySelectorAll("button[data-answer]").forEach(btn => {
    btn.addEventListener("click", () => {
      const selected = btn.dataset.answer;

      if (selected === correct) {
        unlockFish(fish);
        btn.classList.add("correct");
        alert(`Correct! You unlocked the ${fish}`);
      } else {
        btn.classList.add("wrong");
        alert("Try again!");
      }
    });
  });
}

// ----------------------------
// FISH TANK PAGE LOGIC
// ----------------------------
function initFishTankPage() {
  const tank = document.getElementById("fish-tank");
  if (!tank || typeof FISH === "undefined") return;

  const unlocked = getUnlockedFish();

  // Clear tank in case of reload
  tank.innerHTML = "";

  FISH.forEach(fish => {
    // 🔑 ONLY show unlocked fish
    if (!unlocked.includes(fish.id)) return;

    const img = document.createElement("img");
    img.src = fish.img;
    img.alt = fish.name;
    img.className = "fish";

    tank.appendChild(img);
  });
}


// ----------------------------
// PAGE ROUTER
// ----------------------------
// document.addEventListener("DOMContentLoaded", () => {
//   initQuestionPage();
//   initFishTankPage();
  
document.addEventListener("DOMContentLoaded", () => {
  initQuestionPage();
  initFishTankPage();

  const resetBtn = document.getElementById("start-over");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      if (confirm("This will erase all progress. Start over?")) {
        resetProgress();
      }
    });
  }
});

// ----------------------------
// Reset Progress
// ----------------------------
function resetProgress() {
  localStorage.removeItem("unlockedFish");
  window.location.href = "../index.html"; // adjust path if needed
}



