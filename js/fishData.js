//fishData.js

const FISH = [
    {id: "angelfish", name:"angelfish", img: "../resources/angelfish.svg"}, 
    {id: "betta", name:"betta", img: "../resources/betta.svg"}, 
    {id: "chichlid", name:"chichlid", img: "../resources/chichlid.svg"},
    {id: "gourami", name: "gourami", img: "../resources/gourami.svg"},
    {id: "gunnar", name: "gunnar",img: "../resources/gunnar.svg"},
    {id: "jennie", name: "jennie",img: "../resources/jennie.svg"},
    {id: "koi", name: "koi",img: "../resources/koi.svg"},
    {id: "platty", name: "platty",img: "../resources/platty.svg"},
    {id: "plecto", name: "plecto",img: "../resources/plecto.svg"},
    {id: "puffer", name: "puffer",img: "../resources/puffer.svg"},
    {id: "rainbow", name: "rainbow",img: "../resources/rainbow.svg"}
]

function unlockFish(fishId) {
  let unlocked = JSON.parse(localStorage.getItem("unlockedFish")) || [];

  if (!unlocked.includes(fishId)) {
    unlocked.push(fishId);
    localStorage.setItem("unlockedFish", JSON.stringify(unlocked));
  }
}
