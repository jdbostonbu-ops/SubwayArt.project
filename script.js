
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


function handleNavClick(event) {
  event.preventDefault(); 

  const link = event.currentTarget;
  const href = link.getAttribute('href');

  
  link.classList.add('fade-out');

  
  setTimeout(() => {
    window.location.href = href; 
  }, 500); 
}


document.addEventListener('DOMContentLoaded', (event) => {
  const navLinks = document.querySelectorAll('.nav-links');
  navLinks.forEach(link => {
    link.addEventListener('click', handleNavClick);
  });
});
