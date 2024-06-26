function displaySong(response) {
    
        new Typewriter("#song", {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
    });
}

function generateSong(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "80a798345to071a9579b530bbe0bf192";
    let context = "You are an amazing song expert and love to write short songs. Your mission is to generate a 6 line song with positivity in basic HTML and seperate each line with a <br />. Make sure to follow the user instructions. Do not include a title please. Sign the song with 'SheCodes AI' inside a <strong> element at the end of the song.";
    let prompt = `User instructions: Generate a heartouching song about ${instructionsInput.value}`;
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let songElement = document.querySelector("#song");
    songElement.classList.remove("hidden");
    songElement.innerHTML = `<div class= "generating">⏳Generationg the song about ${instructionsInput.value}</div>`;


    axios.get(apiURL).then(displaySong);
}

let songFormElement = document.querySelector("#song-generator-form");
songFormElement.addEventListener("submit", generateSong);