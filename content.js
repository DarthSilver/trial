// Listen for messages from the popup script
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.minimizeVideos) {
      // If the user wants to minimize videos, call a function to minimize them
      minimizeAllVideos();
    }
  });
  
  // Function to minimize YouTube videos on the current page
function minimizeYouTubeVideos() {
    const videoElements = document.querySelectorAll("video");
    videoElements.forEach(function (videoElement) {
      // Check if the video is from YouTube
      if (videoElement.src.includes("youtube.com")) {
        // Pause the YouTube video
        videoElement.pause();
      }
    });
  }
  
  // You may also want to add event listeners to handle tab switching in the browser
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
      // User switched to another tab, minimize videos
      minimizeAllVideos();
    } else {
      // User switched back to this tab; you can choose to restore videos or not
      // To restore, you might reload the page or seek to the original play position.
    }
  });