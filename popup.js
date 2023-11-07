document.addEventListener('DOMContentLoaded', function () {
    // Find the checkbox element in the popup HTML
    const minimizeVideosCheckbox = document.getElementById('minimizeVideos');
  
    // Load the saved user preference for video minimization
    chrome.storage.sync.get({ minimizeVideos: false }, function (items) {
      minimizeVideosCheckbox.checked = items.minimizeVideos;
    });
  
    // Add an event listener for the checkbox to toggle video minimization
    minimizeVideosCheckbox.addEventListener('change', function () {
      const minimizeVideos = minimizeVideosCheckbox.checked;
  
      // Save the user's preference in storage
      chrome.storage.sync.set({ minimizeVideos });
  
      // Send a message to the content script to apply the preference
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, { minimizeVideos });
      });
    });
  });