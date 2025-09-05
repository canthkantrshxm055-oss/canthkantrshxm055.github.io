let count = 0;
const img = document.getElementById("friend-img");
const counter = document.getElementById("counter");
const sound = document.getElementById("click-sound");

img.addEventListener("click", () => {
  count++;
  counter.textContent = count;
  sound.currentTime = 0;
  sound.play();
});