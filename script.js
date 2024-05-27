document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('audio');
    var audioButton = document.getElementById('audioButton');

    // Toggle audio playback when button is clicked
    audioButton.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            audioButton.textContent = '🔊';
        } else {
            audio.pause();
            audioButton.textContent = '🔇';
        }
    });

    // Add click event listener to redirect to another page when clickArea is clicked
    document.getElementById('clickArea').addEventListener('click', function() {
        window.location.href = 'anotherpage.html';
    });
});
