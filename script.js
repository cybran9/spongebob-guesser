// A small dataset of frames (image path + episode name)
let images = [
  { src: "images/frame1.png", episode: "Band Geeks" },
  { src: "images/frame2.png", episode: "Pizza Delivery" },
  { src: "images/frame3.png", episode: "Chocolate with Nuts" }
];

let current;

// Pick a random frame and show it
function newFrame() {
  current = images[Math.floor(Math.random() * images.length)];
  document.getElementById("frame").src = current.src;
  document.getElementById("result").innerText = "";
  document.getElementById("guess").value = "";
}

// Check the user's guess
function checkGuess() {
  const guess = document.getElementById("guess").value.trim().toLowerCase();
  if (guess === current.episode.toLowerCase()) {
    document.getElementById("result").innerText = "✅ Correct! It was " + current.episode;
  } else {
    document.getElementById("result").innerText = "❌ Nope! The correct answer is " + current.episode;
  }
  setTimeout(newFrame, 2000); // Show new frame after 2 seconds
}

// Run newFrame() when the page loads
window.onload = newFrame;