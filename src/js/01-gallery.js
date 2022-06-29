// Описан в документации
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
const imageList = document.querySelector(".gallery");

const imageListItem = galleryItems.map(({ preview, original, description }) =>

    `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
      
    />
  </a>
</div>`
).join('');


imageList.insertAdjacentHTML(`afterbegin`, imageListItem);
// // console.log(galleryItems);

let gallery = new SimpleLightbox('.gallery a', {captionsData: 'alt',
captionDelay: 250 });
