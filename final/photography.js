const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const button = document.querySelector('.dark');

// Array of image paths
const imagePaths = ['../final/images/Bandimere2.png', '../final/images/Bandimere3.png', '../final/images/Bandimere4.png', '../final/images/Bandimere5.png'];

// Toggle dark/light mode
function toggleDarkMode() {
    if (button.classList.contains('dark')) {
        button.classList.replace('dark', 'light');
        document.body.style.backgroundColor = 'rgba(0,0,0,0.8)';
    } else {
        button.classList.replace('light', 'dark');
        document.body.style.backgroundColor = 'white';
    }
}
// Generate thumbnails
imagePaths.forEach((path) => {
    const img = document.createElement('img');
    img.src = path;
    img.alt = 'Thumbnail';
    img.style.width = '193px';  // Set the width inline
    img.style.height = 'auto';  // Maintain aspect ratio
    img.onclick = () => displayedImage.src = path;
    thumbBar.appendChild(img);
})

