// Get references to the elements
const rainbowContainer = document.getElementById("rainbow-container");
const messageElement = document.getElementById("message");
const shuffleButton = document.getElementById("shuffleButton");
const checkButton = document.getElementById("checkButton");

// Correct order of the images
const correctOrder = ["img1", "img2", "img3", "img4", "img5", "img6"];

// Shuffle the images
function shuffleImages() {
  const images = Array.from(rainbowContainer.children);
  for (let i = images.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [images[i], images[j]] = [images[j], images[i]];
  }
  // Append images to container in shuffled order
  images.forEach(image => rainbowContainer.appendChild(image));
}

// Check if the images are in the correct order
function checkOrder() {
  const images = Array.from(rainbowContainer.children);
  const currentOrder = images.map(image => image.id);
  if (JSON.stringify(currentOrder) === JSON.stringify(correctOrder)) {
    messageElement.textContent = "You won!";
    messageElement.classList.add("green");
  } else {
    messageElement.textContent = "You lost!";
    messageElement.classList.add("red");
  }
}

// Add event listeners to the buttons
shuffleButton.addEventListener("click", shuffleImages);
checkButton.addEventListener("click", checkOrder);
