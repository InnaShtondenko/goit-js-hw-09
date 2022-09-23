// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryEl = document.querySelector('.gallery');

const galleryMarkup = galleryItems.map(item =>
  createGalleryItem({
    previewImg: item.preview,
    sizeImg: item.original,
    description: item.description,
  })
);

galleryEl.innerHTML = galleryMarkup.join(' ');
var lightbox = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionData: 'alt',
});

function createGalleryItem({ previewImg, sizeImg, description }) {
  return `<a class="gallery__item" href=${sizeImg}>
            <img class="gallery__image" src=${previewImg} alt=${description} />
        </a>`;
}
console.log(galleryItems);