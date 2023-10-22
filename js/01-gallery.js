import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");

const galeryItem = galleryItems
	.map((image) =>
		`<li class="gallery__item">
		<a class="gallery__link" href="${image.original}">
		<img class="gallery__image" src="${image.preview}" alt="${image.description}" data-source="${image.original}" />
		</a>
		</li>`
	)
	.join("")
gallery.insertAdjacentHTML("afterbegin", galeryItem);

const instance = basicLightbox.create(`<img src="" />`);

const showImage = (event) => {
	event.preventDefault();
	const datasetImgSrc = event.target.dataset.source;
	instance.element().querySelector('img').src = datasetImgSrc;
	instance.show();
}

const closeImg = (event) => {
	if (event.key === "Escape" && !instance.close()) {
		instance.close();
		console.log("show");
	}
}

gallery.addEventListener("click", showImage);
document.addEventListener("keydown", closeImg);






