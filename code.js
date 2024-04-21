$(document).ready(function() {
    const settings = {
      async: true,
      crossDomain: true,
      url: 'https://star-wars-characters.p.rapidapi.com/46DYBV/star_wars_characters',
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'bd52e5e7ffmsh89bd8a2fdc9bd1cp1dc817jsn1ee1937f8233',
        'X-RapidAPI-Host': 'star-wars-characters.p.rapidapi.com'
      }
    };
  
    $.ajax(settings).done(function (response) {
      // Store all characters
      const allCharacters = response;
  
      // Function to populate characters
      function populateCharacters(characters) {
        $('#characters-container').empty(); // Clear previous characters
        characters.forEach(function(character) {
          const card = `
            <div class="character-card">
              <img src="${character.image}" alt="${character.name}">
              <div class="character-name">${character.name}</div>
              <div class="character-info">
                <p><strong>Species:</strong> ${character.species}</p>
                <p><strong>Gender:</strong> ${character.gender}</p>
                <p><strong>Birth Year:</strong> ${character.birth_year}</p>
                <p><strong>Height:</strong> ${character.height}</p>
                <p><strong>Weight:</strong> ${character.weight}</p>
              </div>
            </div>
          `;
          $('#characters-container').append(card);
        });
      }
  
      // Initial population of characters
      populateCharacters(allCharacters);
  
      // Search functionality
      $('#searchInput').on('keyup', function() {
        const searchText = $(this).val().toLowerCase();
        const filteredCharacters = allCharacters.filter(function(character) {
          return character.name.toLowerCase().includes(searchText);
        });
        populateCharacters(filteredCharacters);
      });
    });
  });
  