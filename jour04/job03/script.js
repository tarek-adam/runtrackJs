// Function to fetch and filter Pokémon data
async function fetchAndFilterPokemon() {
    try {
        // Fetch the Pokémon JSON file
        const response = await fetch('pokemon.json');
        const data = await response.json();

        // Get filter values from the form
        const id = document.getElementById('id').value;
        const name = document.getElementById('name').value;
        const type = document.getElementById('type').value;

        // Filter the data based on the form input
        const filteredPokemon = data.filter(pokemon => {
            const matchesId = id === '' || pokemon.id.toString() === id;
            const matchesName = name === '' || pokemon.name.english.toLowerCase().includes(name.toLowerCase());
            const matchesType = type === '' || pokemon.type.includes(type);

            return matchesId && matchesName && matchesType;
        });

        // Display the filtered results
        const resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = ''; // Clear previous results

        filteredPokemon.forEach(pokemon => {
            const p = document.createElement('p');
            p.textContent = `ID: ${pokemon.id}, Name: ${pokemon.name.english}, Type: ${pokemon.type.join(', ')}`;
            resultsDiv.appendChild(p);
        });
    } catch (error) {
        console.error('Error fetching Pokémon data:', error);
    }
}

// Add event listener to the filter button
document.getElementById('filterButton').addEventListener('click', fetchAndFilterPokemon);
