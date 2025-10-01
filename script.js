// ----------------------------
// SpongeBob 4-Frame Episode Guesser
// ----------------------------

// 1️⃣ Define episodes with 4 frames each
// Frames are ordered: 1 = easiest, 4 = hardest
let episodes = [
  {
    name: "Band Geeks",
    frames: [
      "images/band-geeks/frame1.png",
      "images/band-geeks/frame2.png",
      "images/band-geeks/frame3.png",
      "images/band-geeks/frame4.png"
    ]
  },
  {
    name: "Pizza Delivery",
    frames: [
      "images/pizza-delivery/frame1.png",
      "images/pizza-delivery/frame2.png",
      "images/pizza-delivery/frame3.png",
      "images/pizza-delivery/frame4.png"
    ]
  },
  {
    name: "Chocolate with Nuts",
    frames: [
      "images/chocolate-with-nuts/frame1.png",
      "images/chocolate-with-nuts/frame2.png",
      "images/chocolate-with-nuts/frame3.png",
      "images/chocolate-with-nuts/frame4.png"
    ]
  }
  // Add more episodes here as you want
];

// 2️⃣ Variables to track current episode and frame
let currentEpisode;   // The episode currently being played
let currentFrame = 0; // Which frame of the 4 we are on

// ----------------------------
// 3️⃣ Pick a new random episode
// ----------------------------
function newEpisode() {
  // Pick a random episode from the episodes array
  currentEpisode = episodes[Math.floor(Math.random() * episodes.length)];

  // Reset to first frame
  currentFrame = 0;

  // Show the first frame
  showFrame();
}

// ----------------------------
// 4️⃣ Display the current frame
// ----------------------------
function showFrame() {
  // Set the <img> src to the current frame
  document.getElementById("frame").src = currentEpisode.frames[currentFrame];

  // Clear previous feedback
  document.getElementById("result").innerText = "";

  // Clear input box
  document.getElementById("guess").value = "";
}

// ----------------------------
// 5️⃣ Check the user's guess
// ----------------------------
function checkGuess() {
  // Get the user's input and make it lowercase
  const guess = document.getElementById("guess").value.trim().toLowerCase();

  // Get the correct episode name in lowercase
  const correct = currentEpisode.name.toLowerCase();

  if (guess === correct) {
    // ✅ User guessed correctly
    document.getElementById("result").innerText =
      "Correct! It was " + currentEpisode.name;

    // After 2 seconds, pick a new episode
    setTimeout(newEpisode, 2000);

  } else {
    document.getElementById("message").textContent = "Nope! Try again.";
    // ❌ Incorrect guess → move to next frame
    currentFrame++;

    if (currentFrame < 4) {
      // If frames are left, show the next one
      showFrame();
    } else {
      // If last frame was already shown, reveal correct answer
      document.getElementById("result").innerText =
        "Wrong! The episode was " + currentEpisode.name;

      // After 2 seconds, pick a new episode
      setTimeout(newEpisode, 2000);
    }
  }
}

// ----------------------------
// 6️⃣ Start the game when page loads
// ----------------------------
window.onload = newEpisode;

