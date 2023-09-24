document.addEventListener('DOMContentLoaded', function() {
    const resourcesTab = document.getElementById('resources-tab');
    const videoContainer = document.getElementById('video-container');
    const imagesTab = document.getElementById('images-tab');
    const imageContainer = document.getElementById('image-container');

    resourcesTab.addEventListener('click', function() {
        // Toggle the visibility of the video container
        videoContainer.classList.toggle('hidden');
        // Toggle the background color of the tab for a visual effect
        resourcesTab.classList.toggle('highlighted');
        
        // Hide the images container when switching tabs
        imageContainer.classList.add('hidden');
        // Remove the highlighted style from the Images tab
        imagesTab.classList.remove('highlighted');
    });

    imagesTab.addEventListener('click', function() {
        // Toggle the visibility of the image container
        imageContainer.classList.toggle('hidden');
        // Toggle the background color of the tab for a visual effect
        imagesTab.classList.toggle('highlighted');

        // Hide the video container when switching tabs
        videoContainer.classList.add('hidden');
        // Remove the highlighted style from the Resources tab
        resourcesTab.classList.remove('highlighted');
    });
});

let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollTop > lastScrollTop) {
        // Scrolling down
        document.getElementById('background-container').classList.remove('zoomed-out');
    } else {
        // Scrolling up
        document.getElementById('background-container').classList.add('zoomed-out');
    }

    lastScrollTop = currentScrollTop;
});
