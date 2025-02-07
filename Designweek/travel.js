    let currentIndex1 = 0;
    let currentIndex2 = 0;

    // Get all the slides in both containers
    const slides1 = document.querySelectorAll("#slideshow-container .slides");
    const slides2 = document.querySelectorAll("#slideshow2-container .slides");

    // Function to show the next slide for both slideshows
    function showNextSlide() {
        // Hide current slides in both containers
        slides1[currentIndex1].style.display = "none";
        slides2[currentIndex2].style.display = "none";

        // Increment the index for both slideshows
        currentIndex1 = (currentIndex1 + 1) % slides1.length;
        currentIndex2 = (currentIndex2 + 1) % slides2.length;

        // Show the next slide in both containers
        slides1[currentIndex1].style.display = "block";
        slides2[currentIndex2].style.display = "block";
    }

    // Initial setup: Show the first slide in both containers
    slides1[currentIndex1].style.display = "block";
    slides2[currentIndex2].style.display = "block";

    // Change slides every 3 seconds (3000ms)
    setInterval(showNextSlide, 3000);
