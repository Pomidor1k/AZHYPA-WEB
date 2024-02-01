window.addEventListener("DOMContentLoaded", () => {
  var player = videojs("my-video", {
    playbackRates: [0.5, 1, 1.5, 2],
    features: {
      PictureInPictureMenuButton: false,
    },
  });
});
