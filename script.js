
const audio = document.getElementById("hoverSound");
const word = document.getElementById("wordToHover");


word.addEventListener("mouseover", function() {
    
    audio.currentTime = 0;
    audio.play();
});

word.addEventListener("mouseout", function() {
    audio.pause();
    audio.currentTime = 0;
});


