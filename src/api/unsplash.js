import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 72a050b4092880644836a006425c9ce53604d34b40756c38b76c9930e622be7f'
    }
});