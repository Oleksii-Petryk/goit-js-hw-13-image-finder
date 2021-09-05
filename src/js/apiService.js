import axios from "axios";

export default function axiosGet(queryImages) {
    const API_KEY = '23249426-cbed7229a7b2fc460ade288c0';
    const BASIS_URL = 'https://pixabay.com/api/';
    return axios.get(`${BASIS_URL}?image_type=photo&orientation=horizontal&q=${queryImages}&page=номер_страницы&per_page=12&key=${API_KEY}`)
        .then(response => {
            if (!response.ok) {
                return inputNoticeError();
            };
            return response.json();
        });
};