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

// Controle de Música melhorado
document.addEventListener('DOMContentLoaded', function() {
    const music = document.getElementById('bg-music');
    const toggleBtn = document.getElementById('music-toggle');
    const volumeControl = document.getElementById('volume-control');
    
    // Configurações iniciais
    music.volume = 0.7;
    let isMuted = false;
    
    // Função para alternar mute
    function toggleMute() {
        isMuted = !isMuted;
        music.muted = isMuted;
        toggleBtn.textContent = isMuted ? '🔇' : '🔊';
    }
    
    // Tenta tocar música após interação do usuário
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
    
    // Tocar música quando o usuário interagir com a página
    document.addEventListener('click', function firstInteraction() {
        tryPlayMusic();
        document.removeEventListener('click', firstInteraction);
    });
    
    // Controle de volume
    volumeControl.addEventListener('input', function() {
        if (!isMuted) {
            music.volume = this.value;
        }
    });
    
    // Botão de mute
    toggleBtn.addEventListener('click', function() {
        toggleMute();
    });
});