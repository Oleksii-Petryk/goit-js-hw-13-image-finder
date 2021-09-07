
import ApiService from "./js/apiService";
import refs from "./js/refs";
import * as basicLightbox from "basiclightbox";
import "../node_modules/basiclightbox/dist/basiclightbox.min.css";
import { errorNotice } from './js/errorNotice.js';
import 'material-icons/iconfont/material-icons.css';
import { renderGalleryList } from "./js/renderGalleryList.js";
import { galleryCleaner } from "./js/galleryCleaner.js";


const apiService = new ApiService();


refs.form.addEventListener('submit', onSearch);

refs.gallery.addEventListener('click', onClickImg);


async function onSearch(e) {
    e.preventDefault();

     apiService.query = e.currentTarget.elements.query.value;
     galleryCleaner();
     apiService.resetPage();
     if (apiService.query !== '') {
         try {
             const arrRequestedImages = await apiService.axiosGetImages();
             if (arrRequestedImages.length === 0) {
                 errorNotice();
             }
             renderGalleryList(arrRequestedImages);
         } catch (error) {
             errorNotice();
         }
     }
};

function onClickImg(e) {
    if (e.target.classList.contains('image')) {
        const instance = basicLightbox.create(`<img src= ${e.target.dataset.url} width="1200" height="1000">`)
      instance.show();
    };
};



const onScrollGallery = (entries) => {
    entries.forEach(async entry => {
      if (entry.isIntersecting && apiService.query !== '') {
        try {
        const arrRequestedImages = await apiService.axiosGetImages();      
        renderGalleryList(arrRequestedImages);
    } catch (error) {
    errorNotice();    
    }
    }
  });
};

const intersectionObserver = new IntersectionObserver(onScrollGallery);

intersectionObserver.observe(refs.tracking);