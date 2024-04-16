document.addEventListener("DOMContentLoaded", function() {
    var konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
    var konamiIndex = 0;

    document.addEventListener("keydown", function(event) {
        // Check if the pressed key matches the current position in the Konami code sequence
        if (event.key === konamiCode[konamiIndex]) {
            konamiIndex++;
            // If the Konami code sequence is completed
            if (konamiIndex === konamiCode.length) {
                // Apply La Plateforme_ styles to the body
                document.body.classList.add("la-plateforme");
                // Reset the Konami code sequence index
                konamiIndex = 0;
            }
        } else {
            // Reset the Konami code sequence index if the pressed key does not match the current position
            konamiIndex = 0;
        }
    });
});
