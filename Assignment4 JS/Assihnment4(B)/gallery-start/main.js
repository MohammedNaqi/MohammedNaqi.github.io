const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imagesArray = ['pic1.jpg','pic2.jpg','pic3.jpg','pic4.jpg','pic5.jpg']

/* Declaring the alternative text for each image file */
const altImage = ['This is a photo ofa portion of someone face','A rock formation', 'purple flowers', 'Ancient Ejyptian murals','A butterfly on the leaf' ]
/* Looping through images */

for (const image of imagesArray){
    const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);
}



/* Wiring up the Darken/Lighten button */
