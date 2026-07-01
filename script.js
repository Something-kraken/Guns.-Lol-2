const loader = document.getElementById("loader");
const video = document.getElementById("bg-video");
const muteBtn = document.getElementById("mute");
const muteIcon = muteBtn.querySelector("i");

// Start muted (required by browsers)
video.muted = true;

// Click to Enter
loader.addEventListener("click", () => {

    loader.style.opacity = "0";

    setTimeout(() => {
        loader.style.display = "none";
    }, 800);

    // Play video
    video.play();

    // Try to enable sound after user interaction
    video.muted = false;

    video.play().catch(() => {
        video.muted = true;
    });

});

// Mute / Unmute
muteBtn.addEventListener("click", () => {

    video.muted = !video.muted;

    if(video.muted){
        muteIcon.className = "fa-solid fa-volume-xmark";
    }else{
        muteIcon.className = "fa-solid fa-volume-high";
    }

});

// Small press animation
document.querySelectorAll(".card").forEach(card=>{

    card.addEventListener("click",()=>{

        card.style.transform="scale(.97)";

        setTimeout(()=>{
            card.style.transform="";
        },150);

    });

});
