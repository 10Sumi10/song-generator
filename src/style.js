function generateSong(event) {
    event.preventDefault();


    new Typewriter('#song', {
        strings: "Everybody needs inspiration",
        autoStart: true,
        delay: 1,
        cursor: "",
      });

    
}



let songFormElement = document.querySelector("#song-generator-form");
songFormElement.addEventListener("submit", generateSong);