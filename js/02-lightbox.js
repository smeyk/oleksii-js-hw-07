import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");

const galeryItem = galleryItems
	.map((image) =>
		`<li class="gallery__item">
		<a class="gallery__link" href="${image.original}">
		<img class="gallery__image" src="${image.preview}" alt="${image.description}" />
		</a>
		</li>`
	)
	.join("")
gallery.insertAdjacentHTML("afterbegin", galeryItem);


const lightbox = new SimpleLightbox('.gallery__item .gallery__link', {
	captionsData: "alt",
	captionDelay: 250,
});


