function jsonValueKey(jsonString, key) {
    // Parse the JSON string into a JavaScript object
    const jsonObject = JSON.parse(jsonString);
    
    // Check if the key exists in the object and return the value
    if (jsonObject.hasOwnProperty(key)) {
        return jsonObject[key];
    } else {
        // Return null if the key does not exist in the object
        return null;
    }
}

// Example usage
const jsonString = '{"city": "Marseille", "country": "France"}';
const key = "city";
const value = jsonValueKey(jsonString, key);

// Display the value on the webpage
const paragraph = document.createElement('p');
paragraph.textContent = `The value associated with the key "${key}" is: ${value}`;
document.body.appendChild(paragraph);
