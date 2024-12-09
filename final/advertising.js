let slideIndex = 0;

// Fetch the project data
fetch('../final/projects.json')
  .then(response => response.json())
  .then(data => {
    const advertisingProject = data.projects.find(project => project.name === "Queer AF");
    populateSlides(advertisingProject.images);
    showSlides(slideIndex);
  })
  .catch(err => console.error(`Error: ${err}`));

// Populate the slides dynamically
function populateSlides(images) {
    const slideshowContainer = document.querySelector('.slideshow-container');
    images.forEach((image, index) => {
        const slideDiv = document.createElement('div');
        slideDiv.className = 'slide fade';
        slideDiv.innerHTML = `<img src="${image}" alt="Design ${index + 1}">`;
        slideshowContainer.appendChild(slideDiv);
        console.log(`Added image: ${image}`); 
    });
}

// Show the current slide
function showSlides(n) {
    const slides = document.getElementsByClassName("slide");
    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}

// Change the slide when arrows are clicked
function changeSlide(n) {
    showSlides(slideIndex += n);
}
