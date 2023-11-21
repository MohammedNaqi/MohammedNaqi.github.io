const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imagesArray = ['images/pic1.jpg','images/pic2.jpg','images/pic3.jpg','images/pic4.jpg','images/pic5.jpg'];

/* Declaring the alternative text for each image file */
const altImage = ['This is a photo ofa portion of someone face','A rock formation', 'purple flowers', 'Ancient Ejyptian murals','A butterfly on the leaf' ];
/* Looping through images */

for (const image of imagesArray){
    const newImage = document.createElement('img');
    const altText = altImage[0]

newImage.setAttribute('src', image);
newImage.setAttribute('alt', altText);
thumbBar.appendChild(newImage);
}



/* Wiring up the Darken/Lighten button */
