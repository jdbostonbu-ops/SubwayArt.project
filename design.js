document.addEventListener("DOMContentLoaded", () => {

const textContainer = document.getElementById("animated-text");
const audio = document.getElementById("hoverSound");

const text = "Design";


const span = document.createElement("span");
span.textContent = text;
textContainer.appendChild(span);


if(textContainer && audio){

textContainer.addEventListener("mouseover", () => {
audio.currentTime = 0;
audio.play();
});

textContainer.addEventListener("mouseout", () => {
audio.pause();
audio.currentTime = 0;
});

}

});


document.addEventListener("click", () => {

const audio = document.getElementById("hoverSound");

if(audio){
audio.muted = true;

audio.play().then(()=>{
audio.pause();
audio.currentTime = 0;
audio.muted = false;
});

}

}, { once:true });

function showOverlay() {
document.getElementById("overlayImage").style.display = "block";
}

function hideOverlay() {
document.getElementById("overlayImage").style.display = "none";
}


function handleNavClick(event) { 
    event.preventDefault(); 
    const link = event.currentTarget; 
    const href = link.getAttribute('href'); 
    link.classList.add('fade-out'); setTimeout(() => { 
        window.location.href = href; }, 500); } 
        document.addEventListener('DOMContentLoaded', (event) => { 
            const navLinks = document.querySelectorAll('.nav-links'); 
            navLinks.forEach(link => { 
                link.addEventListener('click', handleNavClick); 
            }); 
        });
