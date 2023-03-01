// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// Описаний в документації
import SimpleLightbox from "";

// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");
const markup = createMarkup(galleryItems);
galleryRef.innerHTML = markup;

function createMarkup(items) {
    return items
    .map(({preview, original, description}) => 
    `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img class="gallery__image" 
    src="${preview}" data-source="${original}" alt="${description}" 
    />
    </a>
    </div>`)
    .join("");
}

galleryRef.addEventListener("click", onShowsImage);

function onShowsImage(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return;
    }
    
    const instance = basicLightbox.create(`
    <img src=${event.target.dataset.source} width="800" height="600">
    `)

    instance.show()
    console.log(event.target.dataset.source);
}
