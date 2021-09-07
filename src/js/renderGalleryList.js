import refs from "./refs.js";
import galleryListTmpl from '../templates/galleryListTmpl.hbs';


export function renderGalleryList(ArrRequestedImages) {
    const gallery = galleryListTmpl(ArrRequestedImages);
    refs.gallery.insertAdjacentHTML('beforeend', gallery);
};


