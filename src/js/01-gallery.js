// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line
// const galleryList = document.querySelector('.gallery');

// Add gallery items to list
// galleryItems.forEach(({ preview, original, description }) => {
//   const galleryItem = document.createElement('li');
//   galleryItem.classList.add('gallery__item');

//   const link = document.createElement('a');
//   link.classList.add('gallery__link');
//   link.href = original;

//   const image = document.createElement('img');
//   image.classList.add('gallery__image');
//   image.src = preview;
//   image.alt = description;

//   link.append(image);
//   galleryItem.append(link);
//   galleryList.append(galleryItem);
// });

// // Inicialize SimpleLightbox
// new SimpleLightbox('.gallery a', {
//   captionsData: 'alt',
//   captionDelay: 250,
// });

const gallery = document.querySelector('.gallery');
const galleryLightBoxMarkup = createLightBoxImgGallery(galleryItems);
gallery.insertAdjacentHTML('beforeend', galleryLightBoxMarkup);
function createLightBoxImgGallery() {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </li>
     `;
    })
    .join(``);
}
new SimpleLightbox(`.gallery__link`, {
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(galleryItems);

