// Get the button and paragraph elements
document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("button");
    var counter = document.getElementById("counter");

    // Initialize a variable to store the counter value
    var count = 0;

    // Add an event listener to the button
    button.addEventListener("click", addOne);

    // Function to increment the counter and update the paragraph content
    function addOne() {
        count++;
        counter.textContent = count;
    }
});
