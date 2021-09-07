
import { errorNotice } from './errorNotice.js';
export default class ApiService {
    constructor() {
        this.API_KEY = '23249426-cbed7229a7b2fc460ade288c0';
        this.BASIS_URL = 'https://pixabay.com/api/';
        this.queryImages = '';
        this.page = 1;
    };

    async axiosGetImages() {
    try {
    const request = await fetch(`${this.BASIS_URL}?image_type=photo&orientation=horizontal&q=${this.queryImages}&page=${this.page}&per_page=12&key=${this.API_KEY}`);
        const response = await request.json();
        const data = await response;
        this.incrimentPage();
        return data.hits;
    } catch (error) {
        errorNotice();
        }
        
};

    incrimentPage() {
        this.page += 1;
    };

    resetPage() {
        this.page = 1;
    };

    get query() {
        return this.queryImages;
    };

    set query(newQuery) {
        this.queryImages = newQuery;
    };
};
 




