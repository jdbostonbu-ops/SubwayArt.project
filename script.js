const audio = document.getElementById("hoverSound");

document.addEventListener("DOMContentLoaded", () => {

const word = document.getElementById("wordToHover");

if(word && audio){

word.addEventListener("mouseenter", () => {
audio.currentTime = 0;
audio.play();
});

word.addEventListener("mouseleave", () => {
audio.pause();
audio.currentTime = 0;
});

}

});

document.addEventListener("click", () => {

if(audio){
audio.play().then(() => {
audio.pause();
audio.currentTime = 0;
});
}

}, { once:true });

document.addEventListener('DOMContentLoaded', (event) => 
    { const navLinks = document.querySelectorAll('.nav-links'); 
        navLinks.forEach(link => { 
            link.addEventListener('click', handleNavClick); 
        }); 
    }); 
    const links = document.querySelectorAll("a"); 
    const transition = document.querySelector(".page-transition"); 
    links.forEach(link => { 
        link.addEventListener("click", function(e) 
        { const target = this.getAttribute("href"); 
            if(target && target.includes(".html"))
                { e.preventDefault(); 
                    transition.classList.add("active"); setTimeout(() => 
                        { 
                            window.location.href = target; }, 600); } 
        });
    }); 
    window.addEventListener("load", () => { 
        const transition = document.querySelector(".page-transition"); 
        setTimeout(()=>{ transition.classList.remove("active"); },100); 
    }); 