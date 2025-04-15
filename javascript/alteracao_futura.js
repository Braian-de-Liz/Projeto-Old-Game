function botaobaixar() {
    let continua = ("você deve parar")
    continua = true

    while (continua = true) {
        alert("VOCÊ ESTA COMETENDO PIRATARIA")
        if (confirm("VAI FICAR DE VARZEA?")) {
            window.close();
            break;
        }
    }
}


document.addEventListener('DOMContentLoaded', function() {
    const music = document.getElementById('bg-music');
    const toggleBtn = document.getElementById('music-toggle');
    const volumeControl = document.getElementById('volume-control');
    
    
    music.volume = 0.7;
    let isMuted = false;
    
    
    function toggleMute() {
        isMuted = !isMuted;
        music.muted = isMuted;
        toggleBtn.textContent = isMuted ? '🔇' : '🔊';
    }
    
    
    function tryPlayMusic() {
        music.play()
            .then(() => {
                toggleBtn.textContent = '🔊';
            })
            .catch(e => {
                console.log("Reprodução bloqueada:", e);
                toggleBtn.textContent = '🔇 (clique)';
            });
    }
    
    
    document.addEventListener('click', function firstInteraction() {
        tryPlayMusic();
        document.removeEventListener('click', firstInteraction);
    });
    
    
    volumeControl.addEventListener('input', function() {
        if (!isMuted) {
            music.volume = this.value;
        }
    });
    
    toggleBtn.addEventListener('click', function() {
        toggleMute();
    });
});