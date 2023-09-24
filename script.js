  // Wait for the page to fully load
  window.addEventListener('load', function () {
    // Hide the loading screen with a fade-out animation
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.style.transition = 'opacity 1s';
    loadingScreen.style.opacity = '0';

    // Remove the loading screen from the DOM after the animation
    setTimeout(function () {
        loadingScreen.remove();
    }, 1000); // Adjust the time as needed
});

if (!window.IntersectionObserver) {
    console.log("hello there");
  }
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      } else {
        entry.target.classList.remove("in-view");
      }
    });
  });
  
  observer.observe(document.querySelector(".animated-title"));
  observer.observe(document.querySelector(".animated-content"));
  observer.observe(document.querySelector(".overlay"));

 // Check if developer tools are open
 //function checkForDevTools() {
    //if (window.outerWidth - window.innerWidth > 100 || window.outerHeight - window.innerHeight > 100) {
        // Developer tools may be open
        // Redirect to another website
        //window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    }
}

// Check for dev tools on page load
checkForDevTools();

// Listen for changes in window size (developer tools can trigger this)
window.addEventListener('resize', checkForDevTools);
  
  console.log("Made by Udaneth Ileperuma")

