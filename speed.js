const setSpeed = () => {
    const video = document.querySelector('video');
    if (video && video.playbackRate !== 1.75) {
        video.playbackRate = 1.75;
    }
};

// Try to apply speed every 1 second (handles new videos, auto-play next video)
setInterval(setSpeed, 1000);
