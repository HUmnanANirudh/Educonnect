const playButton = document.querySelector('.play-button');
const videoPlaceholder = document.querySelector('.video-placeholder');
const sidebarLinks = document.querySelectorAll('.sidebar a');
const contentArea = document.getElementById('content-area');

playButton.addEventListener('click', () => {
  // Replace the placeholder with a real video player
  const videoElement = document.createElement('video');
  videoElement.src = 'path/to/your/video.mp4';
  videoElement.controls = true;
  videoElement.classList.add('video');
  videoPlaceholder.parentNode.replaceChild(videoElement, videoPlaceholder);
});

sidebarLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const section = event.target.dataset.section;
    updateContentArea(section);
  });
});

function updateContentArea(section) {
  // Load content for the selected section
  // You can use AJAX or fetch to load content from a JSON file
  fetch(`data/${section}.json`)
    .then(response => response.json())
    .then(data => {
      contentArea.innerHTML = data.content;
    })
    .catch(error => {
      console.error('Error loading content:', error);
    });
}