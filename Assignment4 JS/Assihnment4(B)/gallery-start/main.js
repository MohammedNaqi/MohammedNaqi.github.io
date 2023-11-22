const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imagesArray = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */
const altText = {
    'pic1.jpg':'photo of a portion of someone face', 
    'pic2.jpg':'A rock formation',
    'pic3.jpg':'purple flowers', 
    'pic4.jpg':'Ancient Ejyptian murals',
    'pic5.jpg':'A butterfly on the leaf'
};
/* Looping through images */

for (const image of imagesArray) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${image}`);
    newImage.setAttribute('alt', altText[image]);
    thumbBar.appendChild(newImage);
    // Adding a click event listener to each thumbnail image
    newImage.addEventListener("click", e => {
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
})};

// Adding a click event listener to each thumbnail image


// function button (newImage, altText){
//     newImage.setAttribute('src', newImage.scr);
//     newImage.setAttribute('alt', altText);
// }

/* Wiring up the Darken/Lighten button */

// const btnClass = btn.getAttribute('class')

// function dark 
// if (btnClass === "dark") {
//     btn.setAttribute = 
// }

// btn.setAttribute("class", xxx);
// btn.textContent = xxx;
// overlay.style.backgroundColor = xxx;
