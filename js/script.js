// Functie om dark mode te schakelen
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    
    // Sla de huidige toestand van de dark mode op in localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        localStorage.setItem('dark-mode', 'disabled');
    }
}

// Controleer bij het laden van de pagina of de dark mode moet worden ingeschakeld
document.addEventListener("DOMContentLoaded", function() {
    // Controleer of dark mode is ingeschakeld in localStorage
    if (localStorage.getItem('dark-mode') === 'enabled') {
        document.body.classList.add('dark-mode');
    }

    const video = document.getElementById('customVideo');
    const playButton = document.getElementById('playBtn');
    const pauseButton = document.getElementById('pauseBtn');
    const forwardButton = document.getElementById('forwardBtn');
    const hamburger = document.querySelector(".hamburger");
    const navBar = document.querySelector(".nav-bar");

    console.log("Play button: ", playButton);
    console.log("Pause button: ", pauseButton);
    console.log("Forward button: ", forwardButton);

    playButton.addEventListener('click', function() {
        console.log("Play button clicked");
        video.play();
    });

    pauseButton.addEventListener('click', function() {
        console.log("Pause button clicked");
        video.pause();
    });

    forwardButton.addEventListener('click', function() {
        console.log("Forward button clicked");
        video.currentTime += 10;
    });

    hamburger.onclick = function() {
        navBar.classList.toggle("active");
    }
});

// Functies voor het toevoegen van en het verwijderen van grijsfilter
document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById('customVideo');

    function removeGrayscale() {
        video.style.filter = "none";
    }

    function addGrayscale() {
        video.style.filter = "grayscale(100%)";
    }

    video.addEventListener('play', removeGrayscale);
    video.addEventListener('pause', addGrayscale);
    video.addEventListener('ended', addGrayscale);
});

// Functie voor het wisselen van video's
document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById('customVideo');
    const source = document.getElementById('video-bron');

    const button1 = document.getElementById('video1');
    const button2 = document.getElementById('video2');

    const videoSources = {
        video1: "https://player.vimeo.com/progressive_redirect/playback/973363670/rendition/1080p/file.mp4?loc=external&signature=aca9e678177699e0b2934cfef1f76e3c125cc70e1050b2417d7888c3756e7bf9",
        video2: "https://player.vimeo.com/progressive_redirect/playback/970545286/rendition/1080p/file.mp4?loc=external&signature=be39c88dd3ad5953f956fca94ae51b2135aff7213f6f8055979c4dcc77347c38" // Vervang dit met je werkelijke video-URL
    };

    function switchVideo(videoKey) {
        source.src = videoSources[videoKey];
        video.load();
        video.play();
    }

    button1.addEventListener('click', function() {
        switchVideo('video1');
    });

    button2.addEventListener('click', function() {
        switchVideo('video2');
    });
});




