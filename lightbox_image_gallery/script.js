const gallery = document.querySelector('#gallery');
const popup = document.querySelector('#popup');
const selectedImage = document.querySelector('#selectedImage');
const imageIndexes = [1, 2, 3, 4, 5, 6, 7, 8];
const selectedIndex = null;
imageIndexes.forEach(i => {
    const img = document.createElement('img');
    img.src = `images/img-${i}.jpg`;
    img.alt = `Picture of Image ${i} as shown in figure`;
    img.classList.add('galleryImage');
    img.addEventListener('click', () => {
        //Pop up
        selectedImage.src = `images/img-${i}.jpg`;
        popup.style.transform = `translateY(0%)`;

    })
    popup.addEventListener('click', () => {
        popup.style.transform = `translateY(-100%)`;
        popup.src = '';
        popup.alt = '';
    })
    gallery.appendChild(img);
});