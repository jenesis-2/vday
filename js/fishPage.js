// fishPage.js - Handle about_fish.html page logic

function initFishPage() {
  const fishGrid = document.getElementById("fish-grid");
  const specialGrid = document.getElementById("special-fish-grid");
  
  if (!fishGrid || !specialGrid || typeof FISH === "undefined") return;

  const unlocked = getUnlockedFish();
  const specialFishIds = ["gunnar", "jennie"];

  // Separate regular fish from special fish
  const regularFish = FISH.filter(fish => !specialFishIds.includes(fish.id));
  const specialFish = FISH.filter(fish => specialFishIds.includes(fish.id));

  // Render regular fish with silhouettes for locked ones
  regularFish.forEach(fish => {
    const isUnlocked = unlocked.includes(fish.id);
    const container = document.createElement("div");
    container.className = "fish-card";
    
    const img = document.createElement("img");
    img.src = fish.img;
    img.alt = fish.name;
    img.className = isUnlocked ? "fish-unlocked" : "fish-locked";
    
    container.appendChild(img);
    fishGrid.appendChild(container);
  });

  // Render special fish with silhouettes for locked ones
  specialFish.forEach(fish => {
    const isUnlocked = unlocked.includes(fish.id);
    const container = document.createElement("div");
    container.className = "fish-card special";
    
    const img = document.createElement("img");
    img.src = fish.img;
    img.alt = fish.name;
    img.className = isUnlocked ? "fish-unlocked" : "fish-locked";
    
    container.appendChild(img);
    specialGrid.appendChild(container);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initFishPage();
});
