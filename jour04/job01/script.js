// Function to fetch the content from expression.txt
function fetchExpression() {
    // Fetch the content from expression.txt
    fetch('expression.txt')
        .then(response => {
            // Check if the response is OK (status code 200)
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Convert the response to text
            return response.text();
        })
        .then(text => {
            // Create a new <p> element
            const paragraph = document.createElement('p');
            // Set the text content of the paragraph to the fetched text
            paragraph.textContent = text;
            // Append the paragraph to the body of the page
            document.body.appendChild(paragraph);
        })
        .catch(error => {
            // Handle any errors that occur during the fetch operation
            console.error('Fetch error:', error);
        });
}

// Add an event listener to the button with ID "button"
document.getElementById('button').addEventListener('click', fetchExpression);
