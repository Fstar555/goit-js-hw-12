import Axios from 'axios';

export async function getImages(query, currentPage) {
    const axios = Axios.create({
        baseURL: 'https://pixabay.com/api/',
        params: {
            key: '43067029-c55b458b38852b6054b39e36e',
            q: query;
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
            page: currentPage,
            per_page: 15,
            },
    });
    
    const responce = await axios.get('');
    return responce.data;

}

